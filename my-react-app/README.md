# 📚 SmartShelf – A Smart Book Display App

SmartShelf is a modern React-based web application that fetches book data from a JSON API and displays it beautifully using Bootstrap cards. It supports search by name, author, and genre, along with pagination for large datasets.

---

## 🚀 Features

- 📖 Displays books in responsive Bootstrap cards
- 🔍 Search by **book name**, **author**, or **genre**
- 📑 Paginated view for efficient browsing
- 💳 Price formatted with USD
- 🧠 Clean, intuitive UI

---

### 📽 Demo Video

[![Watch the video](https://img.youtube.com/vi/8TI5uJ2XC3M/0.jpg)](https://www.youtube.com/watch?v=8TI5uJ2XC3M)

## 🛠️ Tech Stack

- React 19+
- Bootstrap 5
- JSON Server (mock API)
- Fetch API

---

## 📦 Installation

```bash
git clone https://github.com/your-username/smartshelf.git
cd smartshelf
npm install


🧪 Usage
1. Start the JSON Server (Backend)
bash
Copy
Edit
npm run start
2. Start React Development Server
bash
Copy
Edit
npm run dev
Make sure db.json contains your book data with fields like name, author, genre, price, description.

📁 Example db.json
json
Copy
Edit
{
  "posts": [
    {
      "id": 1,
      "name": "Atomic Habits",
      "author": "James Clear",
      "genre": "Self-help",
      "price": 18.99,
      "description": "An easy & proven way to build good habits and break bad ones."
    },
    {
      "id": 2,
      "name": "The Silent Patient",
      "author": "Alex Michaelides",
      "genre": "Thriller",
      "price": 14.5,
      "description": "A psychological thriller of a woman's act of violence against her husband."
    },
    {
      "id": 3,
      "name": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "price": 12.75,
      "description": "A novel about the American dream, wealth, and love in the Jazz Age."
    },
    {
      "id": 4,
      "name": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "genre": "Fantasy",
      "price": 22.0,
      "description": "The first book of the beloved wizarding series."
    },
    {
      "id": 5,
      "name": "Sapiens",
      "author": "Yuval Noah Harari",
      "genre": "History",
      "price": 20.0,
      "description": "A brief history of humankind from evolution to the present day."
    }
  ]
}
🧰 Available Scripts
Script	Description
npm run start	Starts the JSON server on port 8000
npm run dev	    Starts the React development server

📁 Folder Structure
pgsql
Copy
Edit
my-react-app/
├── public/
├── src/
│   ├── App.js
│   └── index.js
├── db.json
├── package.json
└── README.md
✨ Future Enhancements

Stripe integration for purchases

Dark mode toggle

👨‍💻 Author
Your Name – @Sowmyabvbsn
