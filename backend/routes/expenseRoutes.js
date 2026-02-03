const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

// Add new expense
router.post("/", async (req, res) => {
  try {
    const { amount, category, description } = req.body;

    const expense = new Expense({
      amount,
      category,
      description,
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: "Failed to add expense" });
  }
});

module.exports = router;

// Get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expenses" });
  }
});
