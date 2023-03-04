import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'ToiletPaper',
      amount: 94.12,
      date: new Date(2022, 12, 4),
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
      date: new Date(2024, 2, 4),
    },
    {
      id: 'e4',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2025, 8, 9),
    },
  ];

  return (
    <div className='App'>
      <h2>Expenses</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
