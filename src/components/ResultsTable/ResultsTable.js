import React from "react";
import "./ResultsTable.css";
import ResultsTableData from "../ResultsTableData/ResultsTableData";

const ResultsTable = (props) => {
  return <ResultsTableData result={props.resultList} />;
};

export default ResultsTable;
