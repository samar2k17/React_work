import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div>
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <h2>{props.amount}</h2>
    </div>
  );
};

export default ExpenseItem;
