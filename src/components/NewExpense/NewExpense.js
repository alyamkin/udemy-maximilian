import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  const showExpenseFormHandler = () => setDisplayForm(true);

  const hideExpenseFormHandler = () => setDisplayForm(false);

  return (
    <div className="new-expense">
      {displayForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideExpenseForm={hideExpenseFormHandler}
        />
      ) : (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
