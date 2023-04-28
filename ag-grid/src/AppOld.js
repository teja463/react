import React, { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default function App() {
  const [rowData, setRowData] = useState();

  const [columnDefs, setColumnDefs] = useState([
    // {
    //   headerName: "My Country",
    //   width: 200,
    //   showRowGroup: "country",
    //   cellRenderer: "agGroupCellRenderer",
    //   filterValueGetter: (params) => (params.data ? params.data.country : null),
    // },
    // {
    //   headerName: "Year / Athlete",
    //   width: 150,
    //   showRowGroup: "year",
    //   cellRenderer: "agGroupCellRenderer",
    //   valueGetter: "data ? data.athlete : null",
    // },
    {
      headerName: "Country",
      field: "country",
      // width: 120,
      rowGroup: true,
      // rowGroupIndex: 1,
      // hide: true,
    },
    {
      headerName: "Year",
      field: "year",
      width: 90,
      rowGroup: true,
      // rowGroupIndex: 0,
      // hide: true,

    },
    // {
    //   headerName: 'Teja',
    //   showRowGroup: true,
    //   cellRenderer: 'agGroupCellRenderer',
    //   field: 'year'
    // },
    {
      headerName: "Sport",
      field: "sport",
      width: 110,
      
    },
    {
      headerName: "Athlete",
      field: "athlete",
      width: 200,
    },
    {
      headerName: "Gold",
      field: "gold",
      width: 100,
    },
    {
      headerName: "Silver",
      field: "silver",
      width: 100,
    },
    {
      headerName: "Bronze",
      field: "bronze",
      width: 100,
    },
    {
      headerName: "Total",
      field: "total",
      width: 100,
    },
    {
      headerName: "Age",
      field: "age",
      width: 90,
    },
    {
      headerName: "Date",
      field: "date",
      width: 110,
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
    )
      .then((result) => result.json())
      .then((r) => setRowData(r));
  }, []);

  function strcmp(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  const autoGroupColumnDef = {
    headerName: "My Group",
    // field: "country",
    // cellRendererParams: {
    //   suppressCount: true,
    //   checkbox: true,
    // },
    /* comparator: function (valueA, valueB) {
      if (valueA == null || valueB == null) return valueA - valueB;
      if (!valueA.substring || !valueB.substring) return valueA - valueB;
      if (valueA.length < 1 || valueB.length < 1) return valueA - valueB;
      return strcmp(
        valueA.substring(1, valueA.length),
        valueB.substring(1, valueB.length)
      );
    }, */
  };

  return (
    <div className="ag-theme-balham" style={{ height: 700 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        // groupMultiAutoColumn={true}
        // autoGroupColumnDef={autoGroupColumnDef}
        // groupSuppressAutoColumn={true}
        // groupHideOpenParents={true}
      />
    </div>
  );
}
