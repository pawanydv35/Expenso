# 💰 Expenso - Expense Tracker Web App

A **full-stack Expense Tracker application** built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
It allows users to **track income and expenses**, categorize transactions, view balances, and analyze spending habits visually.

---

## 🚀 Features

✅ Add, edit, and delete income or expense transactions
✅ Categorize transactions (e.g., Food, Rent, Travel, etc.)
✅ View total balance, income, and expenses
✅ Filter by category or date
✅ Data persistence with MongoDB (or LocalStorage in basic version)
✅ Responsive and clean UI
✅ Optional user authentication using JWT
✅ Visual charts to display financial summaries (using Chart.js or Recharts)

---

## 🧩 Tech Stack

### 🖥️ **Frontend**

* React.js
* Axios (for API requests)
* React Hooks (useState, useEffect, useContext)
* TailwindCSS / CSS Modules for styling
* Chart.js or Recharts (for data visualization)

### ⚙️ **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT for authentication
* bcrypt for password hashing
* dotenv for environment configuration

---

## 📁 Folder Structure

```
expense-tracker/
├── client/                    # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── AddTransaction.jsx
│       │   ├── TransactionList.jsx
│       │   ├── SummaryCard.jsx
│       │   ├── FilterBar.jsx
│       │   └── ChartSection.jsx
│       ├── App.js
│       ├── index.js
│       └── styles/
│           └── App.css
│
├── server/                    # Backend API
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── transactionController.js
│   ├── models/
│   │   ├── transactionModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── transactionRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── .env
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/pawanydv35/expenso.git
cd expenso
```

### 2️⃣ **Install Dependencies**

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

## 🛠️ Environment Variables

Create a `.env` file inside the `/server` directory with:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## ▶️ Run the App

### Run Backend

```bash
cd server
npm start
```

### Run Frontend

```bash
cd ../client
npm run dev
```

The app will usually run on [http://localhost:3000](http://localhost:3000)


```


## 💡 Future Improvements

* Add budget goals and alerts
* Export reports as PDF/Excel
* Integrate Google Authentication (OAuth2)
* Add recurring transactions feature
* Multi-user collaboration (shared accounts)

---

## 🧑‍💻 Author

**Pawan [@yourusername]**
💼 MERN Stack Developer in progress
📧 [pawanydv3010@gmail.com](mailto:pawanydv3010@gmail.com)

---

## 🏆 Acknowledgements

* [React Documentation](https://react.dev/)
* [Express.js Guide](https://expressjs.com/)
* [MongoDB Atlas](https://www.mongodb.com/atlas)
* [Chart.js Docs](https://www.chartjs.org/docs/latest/)

---

