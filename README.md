📚 Express Book Reviews API

A RESTful Book Review API built with Node.js and Express.js as part of the IBM Backend Development course. The project demonstrates authentication, routing, asynchronous programming, and API development.

🚀 Features

- 📖 View all available books
- 🔍 Search books by:
  - ISBN
  - Author
  - Title
- 📝 Read book reviews
- 👤 User registration
- 🔐 User login with authentication
- ✍️ Add, update, and delete book reviews (authenticated users)
- ⚡ Async API implementations using Promises and Async/Await

🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- JSON
- Express Session
- JWT (JSON Web Tokens)

📂 Project Structure

.
├── router/
│   ├── auth_users.js
│   ├── general.js
│   └── booksdb.js
├── index.js
├── package.json
└── README.md

⚙️ Installation

git clone <repository-url>
cd expressBookReviews
npm install

▶️ Run the Server

npm start

The server will start on:

http://localhost:5000

📌 API Endpoints

Public Routes

Method| Endpoint| Description
GET| "/"| Get all books
GET| "/isbn/:isbn"| Get book by ISBN
GET| "/author/:author"| Get books by author
GET| "/title/:title"| Get books by title
GET| "/review/:isbn"| Get reviews for a book
POST| "/register"| Register a new user

Authenticated Routes

Method| Endpoint| Description
POST| "/customer/login"| User login
PUT| "/customer/auth/review/:isbn"| Add or update a review
DELETE| "/customer/auth/review/:isbn"| Delete your review

🎯 Learning Outcomes

This project helped me understand:

- Express routing
- REST API development
- Authentication and authorization
- Session management
- JWT authentication
- Async programming with Promises and Async/Await
- Error handling
- Building modular backend applications

📜 Course

This project was completed as part of the IBM Backend Development course on IBM SkillsBuild / Coursera.

👨‍💻 Author

Swastik Sharma

If you found this project helpful, feel free to ⭐ the repository.
