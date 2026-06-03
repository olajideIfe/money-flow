import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

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

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">💰 MoneyFlow</h1>

      <Dashboard balance={0} income={0} expenses={0} />

      <TransactionForm
        formData={formData}
        handleChange={() => {}}
        addTransaction={() => {}}
      />

      <SearchBar search={search} setSearch={setSearch} />
    </div>
  );
};

export default App;
