// app/page.js
export default function Dashboard() {
  return (
     
    <div className="flex h-screen  bg-gray-100 overflow-hidden">
  {/* Sidebar */}
  <aside className="w-64 bg-white border-r p-6">
    <nav className="space-y-4">
      <a href="#" className="flex items-center space-x-2 text-blue-600 font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
        </svg>
        <span>Dashboard</span>
      </a>
      <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        <span>Transactions</span>
      </a>
      <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4m0 0c0 2.21 1.79 4 4 4m0-8v8" />
        </svg>
        <span>Budgets</span>
      </a>
      <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <span>Settings</span>
      </a>
    </nav>
  </aside>

  {/* Main Content */}
  <main className=" flex-1 p-10">
    {/* Welcome Section */}
    {/* <div className="text-center mb-5">
      <h1 className="text-3xl font-bold">Welcome to Expenso 🎉</h1>
      <p className="text-gray-600 mt-2">
        Let&apos;s get started by adding your first transaction or setting a budget.
      </p>
    </div> */}

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
  </main>
</div>

  );
}



