import { useState } from 'react';
import { ExpenseList } from './components/ExpenseList';
import { expenseData } from './data/expenses';
import { ExpenseFilter } from './components/ExpenseFilter';

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [selectedCategory, setSelectedCategory] = useState('');

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
