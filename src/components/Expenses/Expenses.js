import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [expenses, setExpenses] = useState(props.items);
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const filterExpensesByDateHandler = (year) => {
    const newExpenses = [...expenses];
    const filteredExpenses = newExpenses.filter(
      (expense) => expense.date.getFullYear() === +year
    );
    setFilteredExpenses(filteredExpenses);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterExpensesByDate={filterExpensesByDateHandler} />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
