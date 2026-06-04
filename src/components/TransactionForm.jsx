import React from 'react'

const TransactionForm = ({
  formData,
  handleChange,
  addTransaction,
}) => {
  return (
    <form
      onSubmit={addTransaction}
      className="
      bg-white
      p-8
      rounded-3xl
      shadow-lg
      mb-8
      "
    >

      <h2 className="text-3xl font-bold mb-6">
        Add Transaction
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="title"
          placeholder="Transaction Name"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="">
            Select Type
          </option>

          <option>
            Income
          </option>

          <option>
            Expense
          </option>

        </select>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="">
            Category
          </option>

          <option>
            Salary
          </option>

          <option>
            Food
          </option>

          <option>
            Transport
          </option>

          <option>
            Bills
          </option>

          <option>
            Shopping
          </option>

          <option>
            Health
          </option>

          <option>
            Education
          </option>

          <option>
            Others
          </option>

        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

      </div>

      <button
        type="submit"
        className="
        bg-green-600
        text-white
        px-8
        py-3
        rounded-xl
        mt-6
        "
      >
        Add Transaction
      </button>

    </form>
  );
};

export default TransactionForm;