import React, { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default function App() {
  const [rowData, setRowData] = useState();

  const [columnDefs, setColumnDefs] = useState([
    // {
    //   headerName: 'My Country',
    //   showRowGroup: 'country',
    //   cellRenderer: 'agGroupCellRenderer'
    // },
    // {
    //   headerName: 'My Year',
    //   showRowGroup: 'year',
    //   cellRenderer: 'agGroupCellRenderer'
    // },
    {
      headerName: "Country",
      field: "country",
      width: 120,
      rowGroup: true,
      // hide: true,
      // enableRowGroup: true
    },
    {
      headerName: "Year",
      field: "year",
      width: 90,
      rowGroup: true,
      // hide: true
    },
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

  const autoGroupColumnDef = {
    headerName: 'Teja',
    cellRendererParams: {
      suppressCount: true
    },
    field: 'athlete'
  }
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

  
  const frameworkComponents = {
    'myRowRenderer': MyRowRenderer
  }

  function defaultGroupSortComparator(nodeA, nodeB){
    if (nodeA.key < nodeB.key) {
      return -1;
    } else if (nodeA.key > nodeB.key) {
      return 1;
    } else {
      return 0;
    }
  }
  return (
    <div className="ag-theme-balham" style={{ height: 700 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        // groupMultiAutoColumn ={true} //show one column for each row group
        // autoGroupColumnDef={autoGroupColumnDef}
        // groupSuppressAutoColumn={true}
        // suppressDragLeaveHidesColumns={true}
        // rowGroupPanelShow={"always"}
        // frameworkComponents={frameworkComponents}
        groupUseEntireRow={true}
        // groupRowRenderer='myRowRenderer'
        // groupRowRenderer='agGroupCellRenderer'
        groupDefaultExpanded={1}
        // groupRowInnerRenderer='myRowRenderer'
        // defaultGroupSortComparator={defaultGroupSortComparator}
        // sideBar={true}
      />
    </div>
  );
}

function MyRowRenderer(params){

  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    params.node.setExpanded(!expanded)
    setExpanded(!expanded)
  }
  return (<div style={{color: 'red', width:'200px', display: 'flex'}} onClick={toggle}>
      <div>{params.node.key}</div>
      <div> ({params.node.allChildrenCount})</div>
    </div>)
}