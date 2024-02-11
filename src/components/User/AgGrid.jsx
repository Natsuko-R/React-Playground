import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import Button from '@mui/material/Button';

export const AgGrid = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const colDefs = [
    { field: "athlete", },
    { field: "age", },
    { field: "country" },
    { field: "year", },
    { field: "date" },
    { field: "sport" },
    { field: "total" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ]

  const defaultColDef = useMemo(() => ({
    resizable: true,
  }), [])

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(res => res.json())
      .then(rowData => {
        setRowData(rowData)
      })
  }, [])

  return (
    <div className="ag-theme-quartz h-[800px]">
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

