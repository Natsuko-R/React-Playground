// Grid API: Access to Grid API methods
let gridApi;

const columnDefs = [
    { field: 'mission', rowGroup: true },
    { field: 'company' },
    { field: 'location', rowGroup: true },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
];

const defaultColDef = {
    resizable: true,
}

const gridOptions = {
    // rowData: [],
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    animatedRows: true
};

gridApi = agGrid.createGrid(document.querySelector('#myGrid'), gridOptions);

fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
    .then((response) => response.json())
    .then((data) => gridApi.setGridOption('rowData', data));