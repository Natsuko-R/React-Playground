import React, { useState, useCallback, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { createOneCarRecord } from "./CarFactory"
import Button from '@mui/material/Button';


// 使用了国际化数字格式化工具 Intl.NumberFormat 来格式化数字。
// 将数字转换为货币格式，并设定货币单位为美元（USD），并且规定小数部分最多保留 0 位
// 使用了 en-US 作为语言和地区设置，表示英语语言环境下的美国地区。
var numberFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})
var myValueFormatter = p => numberFormatter.format(p.value);

let cars = [...new Array(4)].map(() => createOneCarRecord());

export const AgGrid = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState(cars);
  const colDefs = [
    { field: "type", sortable: true },
    { field: "year" },
    { field: "color" },
    {
      field: "price",
      valueFormatter: myValueFormatter,
      cellRenderer: 'agAnimateShowChangeCellRenderer'
    },
  ]

  const getRowId = useCallback(params => {
    // console.log(params.data);
    return params.data.id;
  }, [])

  const onReverse = useCallback(() => {
    cars = [...cars].reverse();
    setRowData(cars);
  }, [])

  const onAsyncTxFlushed = useCallback(e => {
    console.log('============');
    console.log(e);
    console.log('============');
  }, [])

  // 

  const onInsertOne = useCallback(() => {
    const newRecord = createOneCarRecord();
    cars = [newRecord, ...cars]; // add to begin
    // cars = [...cars, newRecord]; // add to end
    setRowData(cars);
  }, [])

  const onRemove = useCallback(() => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedIds = selectedNodes.map(node => node.data.id);
    cars = cars.filter(car => {
      // console.log(car.id, selectedIds.indexOf(car.id));
      return selectedIds.indexOf(car.id) < 0
    });
    setRowData(cars);
  }, [])

  const onUpdate = useCallback(() => {
    cars = cars.map(car => {
      if (Math.random() > 0.5) { return car; }
      return {
        ...car,
        price: car.price + (1000 - Math.floor(Math.random() * 2000))
      }
    });
    setRowData(cars);
  }, [])

  // 

  const onTxInsertOne = useCallback(() => {
    const newRecord = createOneCarRecord();
    const res = gridRef.current.api.applyTransaction({
      add: [newRecord],
      update: [],
      remove: []
    });
    console.log(res);
  }, [])

  const onTxRemove = useCallback(() => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    gridRef.current.api.applyTransaction({
      remove: selectedData
    });
  }, [])

  const onTxUpdate = useCallback(() => {
    const updatedRecords = [];
    gridRef.current.api.forEachNode(node => {
      if (Math.random() > 0.5) return node;
      const car = node.data;
      updatedRecords.push({
        ...car,
        price: car.price + (1000 - Math.floor(Math.random() * 2000))
      })
    });
    gridRef.current.api.applyTransaction({
      update: updatedRecords // already is an array;
    })
  }, [])

  // 

  const onTxAsyncInsertOne = useCallback(() => {
    const newRecord = createOneCarRecord();
    gridRef.current.api.applyTransactionAsync({
      add: [newRecord],
    }, res => console.log(res))
  }, [])

  const onFlushAsyncTx = useCallback(() => {
    gridRef.current.api.flushAsyncTransactions(); // cancel the async 
  }, [])

  return (
    <div className="ag-theme-alpine h-[600px]">
      <div className='flex gap-2 m-4'>
        <Button variant="contained" onClick={onReverse}>Reverse</Button>
      </div>
      <div className='flex gap-2 m-4'>
        <Button variant="outlined" onClick={onInsertOne}>Insert One</Button>
        <Button variant="outlined" onClick={onRemove}>Remove Selected</Button>
        <Button variant="outlined" onClick={onUpdate}>Update Some</Button>
      </div>
      <div className='flex gap-2 m-4'>
        <Button variant="contained" onClick={onTxInsertOne}>Tx Insert One</Button>
        <Button variant="contained" onClick={onTxRemove}>Tx Remove Selected</Button>
        <Button variant="contained" onClick={onTxUpdate}>Tx Update Some</Button>
      </div>
      <div className='flex gap-2 m-4'>
        <Button variant="outlined" onClick={onTxAsyncInsertOne}>Tx Async Insert One</Button>
        <Button variant="outlined" onClick={onFlushAsyncTx}>Flush Async Tx</Button>
      </div>
      <AgGridReact
        // enableCellChangeFlash={true} // underline the changed cells 
        getRowId={getRowId} // prerequisite of transactions to work
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
        onAsyncTransactionsFlushed={onAsyncTxFlushed}
        asyncTransactionWaitMillis={5000} // default is 50
        rowSelection='multiple' // hold shift and select a bunch of rows
        animateRows={true} // make rows move smoothly 
      />
    </div>
  )
}



// 添加了以"Tx"开头的函数是为了使用ag-Grid提供的事务机制来更新数据。这种方式与直接修改数据并使用setRowData来更新数据的方式有一些区别。

// 1.Transaction（事务）机制：通过使用ag-Grid提供的applyTransaction方法，可以将对数据的修改操作（添加、更新、删除）作为一组原子操作来执行。这确保了在执行一系列修改时，数据的一致性和完整性。

// 2.批量更新：使用事务机制可以对数据的多个修改操作进行批量处理，而不是分散地执行多个setRowData操作。这样可以提高性能并减少不必要的UI渲染。

// 3.更好的可读性和可维护性：将数据修改操作封装在事务中可以使代码更清晰、更易于理解和维护，因为它们明确地表达了对数据的操作意图。

// 4.错误处理：事务机制可以提供更好的错误处理机制，因为它们可以返回操作的结果或状态，以便在需要时进行相应的处理。

// 综上所述，使用事务机制可以提供更加健壮和可维护的数据管理方式，特别是在需要处理大量数据或需要保证数据一致性的情况下。

//

// 当使用事务机制时，通常将多个对数据的修改操作打包成一个事务，然后一次性应用到数据上，以确保数据的一致性。

// 假设三个操作按钮：添加、更新和删除，这些操作并没有被包含在一个事务中，所以当执行多个操作时，用户界面可能会出现不一致的状态。

// applyTransaction 函数，接受一个包含添加、更新和删除操作的事务对象。

// 然后根据事务对象的内容对汽车列表进行相应的修改，确保这些操作作为一个整体执行。这样，无论执行多少个操作，用户界面都将保持一致的状态。






