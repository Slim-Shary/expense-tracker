import { useState } from 'react';
import { ExpenseList } from './components/ExpenseList';
import { expenseData } from './data/expenses';

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
