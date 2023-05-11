import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import "./Expenses.css";

const Expenses = props => {

    // console.log(props);
    const array = [...props.data];
    // Another solution E.I.: title={props.data[0].title}
    // console.log(array);

    return (
        <Card className="expenses">
            <ExpenseItem title={array[0].title} amount={array[0].amount} date={array[0].date} />
            <ExpenseItem title={array[1].title} amount={array[1].amount} date={array[1].date} />
            <ExpenseItem title={array[2].title} amount={array[2].amount} date={array[2].date} />
            <ExpenseItem title={array[3].title} amount={array[3].amount} date={array[3].date} />
        </Card>
    );

};

export default Expenses;