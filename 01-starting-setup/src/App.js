import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {
            title: "Cafezinho",
            amount: 3,
            date: new Date(2023, 7, 28),
        },
        {
            title: "Salgado",
            amount: 6,
            date: new Date(2023, 7, 25),
        },
        {
            title: "Ônibus",
            amount: 5,
            date: new Date(2023, 7, 28),
        },
        {
            title: "Conserto celular",
            amount: 90,
            date: new Date(2023, 8, 1),
        },
    ];

    return (
        <div>
            <h1 style={{ color: "white" }}>Controle de Gastos</h1>
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
