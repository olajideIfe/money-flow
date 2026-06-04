import React from 'react'

const TransactionCard = ({
  transaction,
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
    </div>
  );
};

export default TransactionCard;