// app/page.js
export default function Dashboard() {
  return (
    <div className="p-10">
      {/* Welcome Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Welcome to Expenso 🎉</h1>
        <p className="text-gray-600 mt-2">
          Let&apos;s get started by adding your first transaction or setting a budget.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Total Balance */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
          <h2 className="text-lg font-semibold">Total Balance</h2>
          <p className="text-3xl font-bold mt-2">$0</p>
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Add Income
          </button>
        </div>

        {/* Expenses */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
          <h2 className="text-lg font-semibold">Expenses</h2>
          <div className="mt-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h16M6 16h4m-4-4h8m-8-4h12" />
            </svg>
          </div>
          <p className="text-gray-500 mt-2">No expenses yet</p>
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Add Expense
          </button>
        </div>

        {/* Recent Transactions */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <div className="mt-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13m-13 6h13M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
          </div>
          <p className="text-gray-500 mt-2">You don&apos;t have any transactions yet.</p>
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Add Transaction
          </button>
        </div>

        {/* Budgets */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
          <h2 className="text-lg font-semibold">Budgets</h2>
          <div className="mt-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0v7h7" />
            </svg>
          </div>
          <p className="text-gray-500 mt-2">No budgets created yet.</p>
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
}



