import React, { useState } from "react";
import styles from "./ResultsTableData.module.css";

const ResultsTableData = (props) => {

  const formater=new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
    maximumFractionDigits: 2
});
  return (
    <table className={styles['result']}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Inteset(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {props.result.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formater.format(result.totalSaving)}</td>
            <td>{formater.format(result.interest)}</td>
            <td>{formater.format(result.totalInterest)}</td>
            <td>{formater.format(result.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTableData;
