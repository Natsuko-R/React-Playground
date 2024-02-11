import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import Button from '@mui/material/Button';

// Column Properties : 
// https://www.ag-grid.com/react-data-grid/column-properties/

export const AgGrid = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const colDefs = [
    {
      headerName: 'Competitor',
      field: "athlete",
      flex: 2,
      pinned: 'left',
      tooltipField: 'country',
      headerTooltip: 'Hello Natsuki !',
      // lockPinned: true, // cannot disable [pinned] by dragging
      // lockPosition: true, // cannot move columns by dragging
      // hide: true,
      // lockVisible: true, // disable [hide]
      // editable: true
      valueGetter: p => {
        // console.log(p.data);
        // console.log(p.data[2].athlete);
        // return parseFloat((Math.random() * 100).toFixed(2));
        return p.data.athlete;
      },
      valueFormatter: p => {
        // console.log(p);
        return `[ ${p.value} ]`
      }
    },
    // { field: "age", width: 100, minWidth: 80, maxWidth: 200 },
    {
      field: "age",
      colId: 'age-A',
      // pinned: 'right',
      // tooltipValueGetter: () => Math.random(),
    },
    {
      field: "age",
      colId: 'age-B',
    },
    {
      headerName: 'Age',
      valueGetter: p => {
        return p.data.age;
      },
      colId: 'age-C',
    },
    { field: "country" },
    {
      field: "year",
      // pinned: 'right',
    },
    { field: "date" },
    { field: "sport" },
    {
      headerName: 'Medals',
      marryChildren: true, // cannot move the child_column outside the group
      children: [
        { field: "total", columnGroupShow: 'closed' },
        { field: "gold", columnGroupShow: 'open' },
        { field: "silver", columnGroupShow: 'open' },
        { field: "bronze", columnGroupShow: 'open' },
      ]
    },
    // {
    //   headerName: 'AAA',
    //   children: [
    //     {
    //       headerName: 'BBB',
    //       children: [
    //         { field: "date" },
    //         { field: "sport" }
    //       ]
    //     },
    //     {
    //       headerName: 'BBB',
    //       children: [
    //         { field: "date" },
    //       ]
    //     }
    //   ],
    // }
  ]

  const defaultColDef = useMemo(() => ({
    resizable: true,
    // width: 100,
    flex: 1,
    editable: true,
    sortable: true
  }), [])

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(res => res.json())
      .then(rowData => {
        setRowData(rowData)
      })
  }, [])

  const onPushMe = useCallback(() => {

    // getColumns / getAllDisplayedColumns
    // https://www.ag-grid.com/react-data-grid/grid-api/

    const allColumns = gridRef.current.columnApi.getColumns();
    const displayedColumns = gridRef.current.columnApi.getAllDisplayedColumns();
    const yearCol = gridRef.current.columnApi.getColumn("year");

    // setColumnPinned() can be :
    // 1. a string of colId
    // 2. the column object itself
    // gridRef.current.columnApi.setColumnPinned("year", 'left');
    // gridRef.current.columnApi.setColumnPinned(yearCol, 'left');

    console.log("All Columns", allColumns);
    console.log("displayedColumns", displayedColumns);
    console.log("yearCol", yearCol);
  }, [])

  return (
    <div className="ag-theme-quartz h-[800px]">
      <Button variant="contained" onClick={onPushMe}>Push Me</Button>

      <AgGridReact
        defaultColDef={defaultColDef}
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
        animateRows={true} // make rows move smoothly 
      />
    </div>
  )
}

