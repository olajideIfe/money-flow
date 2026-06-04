import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import TransactionCard from "./components/TransactionCard";

const App = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
    date: "",
  });

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addTransaction = (e) => {
    e.preventDefault();

    if (editingId) {
      setTransactions(
        transactions.map((transaction) =>
          transaction.id === editingId
            ? {
                ...transaction,
                ...formData,
              }
            : transaction,
        ),
      );

      setEditingId(null);
    } else {
      const newTransaction = {
        id: Date.now(),
        ...formData,
      };

      setTransactions([...transactions, newTransaction]);
    }

    setFormData({
      title: "",
      amount: "",
      type: "",
      category: "",
      date: "",
    });
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id),
    );
  };

  const income = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const balance = income - expenses;

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || transaction.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });
  const editTransaction = (transaction) => {
    setFormData({
      title: transaction.title,
      amount: transaction.amount,
      type: transaction.type,
      category: transaction.category,
      date: transaction.date,
    });

    setEditingId(transaction.id);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">💰 MoneyFlow</h1>

      <Dashboard balance={balance} income={income} expenses={expenses} />

      <TransactionForm
        formData={formData}
        handleChange={handleChange}
        addTransaction={addTransaction}
        editingId={editingId}
      />

      <SearchBar search={search} setSearch={setSearch} />
      <div
        className=" flex gap-2 flex-wrap mb-6 "
      >
        <button
          onClick={() => setCategoryFilter("All")}
          className=" px-4 py-2 rounded-full bg-white shadow hover:shadow-lg transition "
        >
          All
        </button>

        <button
          onClick={() => setCategoryFilter("Salary")}
          className=" px-4 py-2 rounded-full bg-white shadow hover:shadow-lg transition "
        >
          Salary
        </button>

        <button
          onClick={() => setCategoryFilter("Food")}
          className=" px-4 py-2 rounded-full bg-white shadow hover:shadow-lg transition "
        >
          Food
        </button>

        <button
          onClick={() => setCategoryFilter("Transport")}
          className=" px-4 py-2 rounded-full bg-white shadow hover:shadow-lg transition "
        >
          Transport
        </button>

        <button
          onClick={() => setCategoryFilter("Bills")}
          className=" px-4 py-2 rounded-full bg-white shadow hover:shadow-lg transition "
        >
          Bills
        </button>

        <button
          onClick={() => setCategoryFilter("Shopping")}
          className=" px-4 py-2 rounded-full bg-white shadow hover:shadow-lg transition "
        >
          Shopping
        </button>
      </div>

      {transactions.length === 0 ? (
        <div
          className="
      bg-white
      p-10
      rounded-3xl
      shadow-lg
      text-center
      mt-8
      "
        >
          <h2 className="text-2xl font-bold">💰 No Transactions Yet</h2>

          <p className="text-gray-500 mt-2">
            Add your first transaction above.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {filteredTransactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              editTransaction={editTransaction}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
