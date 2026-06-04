import React from "react";

const Dashboard = ({ balance, income, expenses }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <div className=" bg-slate-800 p-6 rounded-3xl shadow-lg border border-slate-700 ">
        <h3 className=" text-slate-300 text-lg mb-2 ">💰 Balance</h3>

        <p
          className={`text-3xl font-bold
  ${balance >= 0 ? "text-emerald-400" : "text-red-400"}
`}
        >
          ₦{balance}
        </p>
        {balance >= 0 && (
          <p
            className="
        text-emerald-400
        text-sm
        mt-2
        "
          >
            Financially Healthy
          </p>
        )}

        {balance < 0 && (
          <p
            className="
        text-red-400
        text-sm
        mt-2
        "
          >
            Spending Exceeds Income
          </p>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Income</h3>
        <p className=" text-3xl font-bold text-emerald-400 ">₦{income}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Expenses</h3>
        <p className=" text-3xl font-bold text-red-400">₦{expenses}</p>
      </div>
    </div>
  );
};

export default Dashboard;
