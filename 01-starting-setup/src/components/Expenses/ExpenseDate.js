import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString("pt", { month: "long" });
    const day = props.date.toLocaleString("pt", { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">Dia {day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;
