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
    const saved = localStorage.getItem("transactions");

    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      ...formData,
    };

    setTransactions([...transactions, newTransaction]);

    setFormData({
      title: "",
      amount: "",
      type: "",
      category: "",
      date: "",
    });
  };

  console.log(transactions);
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">💰 MoneyFlow</h1>

      <Dashboard balance={0} income={0} expenses={0} />

      <TransactionForm
        formData={formData}
        handleChange={handleChange}
        addTransaction={addTransaction}
      />

      <SearchBar search={search} setSearch={setSearch} />

      {
  transactions.length === 0 ? (

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
      <h2 className="text-2xl font-bold">
        💰 No Transactions Yet
      </h2>

      <p className="text-gray-500 mt-2">
        Add your first transaction above.
      </p>
    </div>

  ) : (

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      {transactions.map(
        (transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
          />
        )
      )}

    </div>

  )
}
    </div>
  );
};

export default App;
