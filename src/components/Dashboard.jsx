import React from 'react'

const Dashboard = ({
  balance,
  income,
  expenses,
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Balance</h3>
        <p>
          ₦{balance}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Income</h3>
        <p>
          ₦{income}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Expenses</h3>
        <p>
          ₦{expenses}
        </p>
      </div>

    </div>
  );
};

export default Dashboard;