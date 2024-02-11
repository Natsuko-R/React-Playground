import React, { useEffect, useState, useMemo, useCallback, useRef, Component } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import Button from '@mui/material/Button';

// THEME : https://www.ag-grid.com/react-data-grid/themes/

// CellClicked : https://www.ag-grid.com/react-data-grid/column-properties/#reference-events-onCellClicked

const PushComp = (props) => {
  const onAt = useCallback(() => {
    window.alert(`AtMark ` + props.value);
  }, [])

  return (
    <>
      <Button variant="outlined" onClick={onAt}>{props.customText}</Button>
      {props.value}
    </>
  )
}

class PullComp extends Component {
  render() {
    return (
      <>
        <Button onClick={() => window.alert(`Class Component`)}>Pull</Button>
        {this.props.value}
      </>
    )
  }
}

export const AgGrid = () => {

  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    // { field: "make", sortable: true, filter: false },
    // { field: "mission", cellRenderer: null },
    {
      field: "mission",
      cellRenderer: PushComp,
      cellRendererParams: {
        customText: "@"
      }
    },
    { field: "company", cellRenderer: PullComp, },
    { field: "location" },
    { field: "date" },
    {
      field: "price",
      cellRenderer: p => <>Price is: {p.value}</>
    },
    {
      field: "successful",
      cellRendererSelector: p => {
        // if (p.value === true) {
        return p.value ? { component: PushComp, params: {} } : { component: PullComp }
        // } else {
        //   return { component: PullComp }
        // }
      },
      cellRendererParams: {
        customText: "Push"
      }
    },
    { field: "rocket" }
  ]);

  // Enable on all columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    // cellRenderer: PushComp
  }), [])

  const handleCellClicked = useCallback((e) => {
    console.log("cellClicked", e);
  }, [])

  const pushMeClicked = useCallback(() => {
    // console.log(gridRef.current);
    gridRef.current.api.deselectAll(); // hold shift and select many rows, then click and free all selected rows
  }, [])

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then(res => res.json())
      .then(rowData => {
        setRowData(rowData)
      })
  }, [])

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <Button variant="contained" onClick={pushMeClicked}>Push Me</Button>
      <AgGridReact
        className="mt-4"
        ref={gridRef}
        onCellClicked={handleCellClicked}
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection='multiple' // hold shift and select a bunch of rows
        animateRows={true} // make rows move smoothly 
        defaultColDef={defaultColDef}
      />
    </div>
  )
}