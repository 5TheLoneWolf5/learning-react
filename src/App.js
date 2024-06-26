// import ExpenseItem from './components/ExpenseItem';
import React from 'react';
import Expenses from "./components/Expenses/Expenses";

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // Imperative programming. What one would do using normal JS.
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // document.getElementById("root").append(para);
  
  // Behind the scenes.

  // return React.createElement("div", {}, 
  // React.createElement("h2", {}, "Let's get started!"), 
  // React.createElement(Expenses, { data: expenses }));

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} hardCodedData="Hard Coded Data"></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> */}
      <Expenses data={expenses}></Expenses>
    </div>
  );

}

export default App;
