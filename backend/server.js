const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("MongoDB error ❌", err));

// Expense Schema
const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// GET expenses
app.get("/expenses", async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.json(expenses);
});

// POST expense
app.post("/expenses", async (req, res) => {
  const { amount, category, description } = req.body;

  const newExpense = new Expense({
    amount,
    category,
    description,
  });

  await newExpense.save();
  res.json(newExpense);
});

// DELETE expense ✅
app.delete("/expenses/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

