import React from 'react'

const TransactionCard = ({
  transaction,
  deleteTransaction,
}) => {
  return (
    <div
      className="
      bg-white
      p-5
      rounded-xl
      shadow-md
      "
    >
      <h2 className="text-xl font-bold">
        {transaction.title}
      </h2>

      <p>
        Amount: ₦{transaction.amount}
      </p>

      <p>
        Type: {transaction.type}
      </p>

      <p>
        Category: {transaction.category}
      </p>

      <p>
        Date: {transaction.date}
      </p>

      <button
  onClick={() =>
    deleteTransaction(
      transaction.id
    )
  }
  className=" bg-red-500 text-white px-4 py-2 rounded-lg mt-4" >
  Delete
</button>
    </div>
  );
};

export default TransactionCard;