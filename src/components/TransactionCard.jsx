import React from "react";

const TransactionCard = ({
  transaction,
  deleteTransaction,
  editTransaction,
}) => {
  return (
    <div className=" bg-slate-800 text-white p-6 rounded-3xl shadow-lg ">
      <h2 className="text-xl font-bold">{transaction.title}</h2>

      {transaction.type === "Income" && (
        <span className=" bg-emerald-500 px-3 py-1 rounded-full text-sm text-white inline-block mt-2 ">
          Income
        </span>
      )}

      {transaction.type === "Expense" && (
        <span className=" bg-red-500 px-3 py-1 rounded-full text-sm text-white inline-block mt-2 ">
          Expense
        </span>
      )}

      <p className=" font-bold text-emerald-400 ">
        Amount: ₦{transaction.amount}
      </p>

      <p>Type: {transaction.type}</p>

      <p>Category: {transaction.category}</p>

      <p>Date: {transaction.date}</p>

      <button
        onClick={() => editTransaction(transaction)}
        className=" bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 mt-4  "
      >
        Edit
      </button>

      <button
        onClick={() => deleteTransaction(transaction.id)}
        className=" bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Delete
      </button>
    </div>
  );
};

export default TransactionCard;
