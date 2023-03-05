import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 1, 4),
  },
  {
    id: 'e2',
    title: 'MacBook Pro',
    amount: 999.67,
    date: new Date(2023, 3, 4),
  },
  {
    id: 'e3',
    title: 'Car New TV',
    amount: 744.38,
    date: new Date(2020, 2, 4),
  },
  {
    id: 'e4',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2019, 8, 9),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
