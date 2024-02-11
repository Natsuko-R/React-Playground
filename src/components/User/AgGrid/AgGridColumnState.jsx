import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import Button from '@mui/material/Button';

// https://www.ag-grid.com/react-data-grid/column-properties/#reference-sort-sortIndex

// 1. Column Definitions
// 2. Column State Api // recommend ！ 
// 3. Specific Column API's

export const AgGrid = () => {
  const gridRef = useRef();
  const savedColState = useRef();

  const [capHeaders, setCapHeaders] = useState(true);
  const [includeMedals, setIncludeMedals] = useState(false);
  const [agePinned, setAgePinned] = useState(undefined);

  const [rowData, setRowData] = useState([]);
  // SOLUTION 1  
  // const colDefs = useMemo(() => {
  //   const withMedals = [
  //     { field: "athlete", },
  //     { field: "age", },
  //     { field: "country" },
  //     { field: "year", },
  //     { field: "date" },
  //     { field: "sport" },
  //     { field: "total", },
  //     { field: "gold", },
  //     { field: "silver", },
  //     { field: "bronze", },
  //   ];

  //   const withoutMedals = [
  //     { field: "athlete", },
  //     { field: "age", },
  //     { field: "country" },
  //     { field: "year", },
  //     { field: "date" },
  //     { field: "sport" },
  //   ];

  //   return includeMedals ? withMedals : withoutMedals;

  // }, [includeMedals])
  // SOLUTION 2
  const colDefs = useMemo(() => {
    return [
      {
        // field: "athlete",
        valueGetter: p => p.data.athlete,
        colId: 'customAthleteId',
        // [initialWidth] works fine with [field], but remember to set [colId] if use [valueGetter]
        initialWidth: 150, // only set at the first time 
        headerName: capHeaders ? `${"athlete".toUpperCase()}` : `${"athlete".toLowerCase()}`
      },
      {
        field: "age",
        width: 100, // change every time
        headerName: capHeaders ? `AGE` : `Age`,
        pinned: agePinned,
      },
      { field: "country" },
      { field: "year", },
      { field: "date" },
      { field: "sport" },
      { field: "total" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      // { field: "total", hide: !includeMedals },
      // { field: "gold", hide: !includeMedals },
      // { field: "silver", hide: !includeMedals },
      // { field: "bronze", hide: !includeMedals },
    ];
  }, [includeMedals, capHeaders, agePinned])

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

  const toggleMedals = useCallback(() => {
    setIncludeMedals(p => !p);
  }, [])

  const toggleCapHeaders = useCallback(() => {
    setCapHeaders(p => !p);
  }, [])

  const onSaveColState = useCallback(() => {
    const colState = gridRef.current.columnApi.getColumnState();
    console.log('colState', colState);
    savedColState.current = colState;
  }, [])

  const onRestoreColState = useCallback(() => {
    console.log('Restoring Column State', savedColState.current);
    gridRef.current.columnApi.applyColumnState({ state: savedColState.current });
  }, [])

  const onWidth100 = useCallback(() => {
    gridRef.current.columnApi.applyColumnState({
      state: [
        { colId: 'customAthleteId', width: 100 },
        { colId: 'age', width: 100 },
        { colId: 'gold', sort: 'desc' },
        // { colId: 'gold', sort: null },
      ],
      defaultState: {
        // sort: null,
        width: 200 // cannot set to null because every cell has to have width
      },
    });
  }, [])

  const onSortGoldSilver = useCallback(() => {
    gridRef.current.columnApi.applyColumnState({
      state: [
        { colId: 'gold', sort: 'desc', sortIndex: 0 },
        { colId: 'silver', sort: 'desc', sortIndex: 1 },
      ],
      defaultState: {
        sort: null,
      }
    });
  }, [])

  const onColsMedalsFirst = useCallback(() => {
    gridRef.current.columnApi.applyColumnState({
      state: [
        { colId: 'gold' }, { colId: 'silver' },
        { colId: 'bronze' }, { colId: 'total' },
        { colId: 'athlete' }, { colId: 'age' },
        { colId: 'country' }
      ],
      applyOrder: true
    });
  }, [])

  const onColsMedalsLast = useCallback(() => {
    gridRef.current.columnApi.applyColumnState({
      state: [
        { colId: 'athlete' }, { colId: 'age' },
        { colId: 'country' },
        { colId: 'gold' }, { colId: 'silver' },
        { colId: 'bronze' }, { colId: 'total' },
      ],
      applyOrder: true
    });
  }, [])


  return (
    <div className="ag-theme-quartz h-[800px]">
      <div className='flex gap-4 m-4'>
        <Button variant="contained" onClick={toggleMedals}>Toggle Medals</Button>
        <Button variant="contained" onClick={toggleCapHeaders}>Toggle CapHeader</Button>
      </div>

      <div className='flex gap-4 m-4 items-center'>
        Set Age Pinned :
        <Button variant="contained" onClick={() => setAgePinned('left')}>Left</Button>
        <Button variant="contained" onClick={() => setAgePinned('right')}>Right</Button>
        {/*    null : clear it 
               undefined : don't touch it */}
        <Button variant="contained" onClick={() => setAgePinned(null)}>NULL</Button>
        <Button variant="contained" onClick={() => setAgePinned('undefined')}>Undefined</Button>
      </div>

      <div className='flex gap-4 m-4 items-center'>
        Column State :
        <Button variant="contained" onClick={onSaveColState}>Save State</Button>
        <Button variant="contained" onClick={onRestoreColState}>Restore State</Button>
        <Button variant="contained" onClick={onWidth100}>Width 100</Button>
        <Button variant="contained" onClick={onSortGoldSilver}>Sort Gold Silver</Button>
        <Button variant="contained" onClick={onColsMedalsFirst}>Medals First</Button>
        <Button variant="contained" onClick={onColsMedalsLast}>Medals Last</Button>
      </div>

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

