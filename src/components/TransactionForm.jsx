import React from "react";

const TransactionForm = ({
  formData,
  handleChange,
  addTransaction,
  editingId,
}) => {
  return (
    <form
      onSubmit={addTransaction}
      className=" bg-slate-800 p-8 rounded-3xl shadow-lg mb-8 text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Add Transaction</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Transaction Name"
          value={formData.title}
          onChange={handleChange}
          className=" bg-slate-700 border border-slate-600 text-white p-3 rounded-xl focus:ring-4 focus:ring-emerald-400 outline-none "
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className=" bg-slate-700 border border-slate-600 text-white p-3 rounded-xl focus:ring-4 focus:ring-emerald-400 outline-none "
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className=" bg-slate-700 border border-slate-600 text-white p-3 rounded-xl focus:ring-4 focus:ring-emerald-400 outline-none "
        >
          <option value="">Select Type</option>

          <option>Income</option>

          <option>Expense</option>
        </select>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className=" bg-slate-700 border border-slate-600 text-white p-3 rounded-xl focus:ring-4 focus:ring-emerald-400 outline-none "
        >
          <option value="">Category</option>

          <option>Salary</option>

          <option>Food</option>

          <option>Transport</option>

          <option>Bills</option>

          <option>Shopping</option>

          <option>Health</option>

          <option>Education</option>

          <option>Others</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className=" bg-slate-700 border border-slate-600 text-white p-3 rounded-xl focus:ring-4 focus:ring-emerald-400 outline-none "
        />
      </div>

      <button
        type="submit"
        className=" bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-xl mt-6 hover:scale-105 transition duration-300 "
      >
        {editingId ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
};

export default TransactionForm;
