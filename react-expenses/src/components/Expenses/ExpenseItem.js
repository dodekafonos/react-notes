import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
    // React hook 'useState':
    const [title, setTitle] = useState(props.title);
    // This returns an array where the first value
    // is the variable itself and the second is the
    // updating function.

    const clickHandler = () => {
        setTitle("Novo título!");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">R${props.amount}</div>
            </div>
            <button onClick={clickHandler} className="expense-item__price">
                Change Title
            </button>
        </Card>
    );
}

export default ExpenseItem;
