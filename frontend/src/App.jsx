import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const fetchExpenses = async () => {
    const res = await fetch("https://expense-manager-production-72cf.up.railway.app/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://expense-manager-production-72cf.up.railway.app/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, category, description }),
    });

    setAmount("");
    setCategory("");
    setDescription("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`https://expense-manager-production-72cf.up.railway.app/expenses/${id}`, {
      method: "DELETE",
    });
    fetchExpenses();
  };

  return (
  <div className="page">
    <header className="header">
      <h1>AI Expense Manager</h1>
      <p>Track and manage your daily expenses</p>
    </header>

    <main className="main">
      <div className="card">
        <h2>Add Expense</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Add Expense</button>
        </form>
      </div>

      <div className="card">
        <h2>Your Expenses</h2>

        {expenses.length === 0 ? (
          <p>No expenses yet</p>
        ) : (
          <ul className="expense-list">
            {expenses.map((exp) => (
              <li key={exp._id} className="expense-item">
                <div>
                  <strong>{exp.description}</strong>
                  <p>{exp.category}</p>
                </div>

                <div>
                  ₹{exp.amount}
                  <button onClick={() => deleteExpense(exp._id)}>❌</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  </div>
);
}

export default App;






