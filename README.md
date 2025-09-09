# rn-expense-tracker
A simple React Native app for tracking expenses locally.
This project is designed for **learning navigation and state management** in React Native.

## Features
- Add Expense Screen – Input expense amount, category, and date.
- Expense List Screen – View all expenses in a scrollable list with totals.
- Monthly Summary Screen – See total monthly expenses with a chart (per category).
- Local State Only – No backend, data stored in memory (optional: `AsyncStorage`).

## Learning Goals
- Practice multi-screen navigation using `react-navigation`.
- Manage shared state across screens (with Context API or Zustand/Redux).
- Display charts with `react-native-svg-charts` or `react-native-chart-kit`.
- Optionally, persist data with `AsyncStorage`.

## Screens
**1. Expense List**
- Displays all expenses.
- Button → Navigate to Add Expense.

**2. Add Expense**
- Form inputs: Amount, Category, Date (default: today).
- Button → Save expense and return to List.

**3. Monthly Summary**
- Shows total expenses this month.
- Displays a pie or bar chart grouped by category.