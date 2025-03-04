# E-Commerce API

## Overview
This is a **secure and scalable e-commerce REST API** built with **Node.js and Express.js**, featuring:
- JWT authentication for secure access
- Rate limiting (100 requests per hour per user)
- CRUD operations for managing products
- Uses a JSON file (`product.json`) as a mock database

## Folder Structure
```
Ecommerce-API/
│── config/
│   ├── db.js            # Handles file-based JSON database
│   ├── auth.js          # JWT authentication middleware
│── routes/
│   ├── productRoutes.js # Routes for product management
│   ├── authRoutes.js    # Routes for authentication
│── middleware/
│   ├── rateLimit.js     # Rate limiting middleware
│── index.js             # Main server file
│── .env                 # Environment variables
│── package.json         # Dependencies & scripts
│── README.md            # Documentation
│── product.json         # Mock database (dummy data)
```

## Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/Ecommerce-API.git
cd Ecommerce-API
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` file in the root directory
```ini
SECRET_KEY=your_super_secret_key
PORT=5000
```

### 4️⃣ Start the server
#### For normal mode:
```sh
npm start
```
#### For development mode (with auto-restart using nodemon):
```sh
npm run dev
```

---

## API Endpoints

### **1️⃣ Authentication**
#### **POST /api/auth/login** - Generate a JWT token
- **Request:**
  ```json
  {
    "username": "testuser"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token_here"
  }
  ```

### **2️⃣ Product Management (Requires JWT Token)**
#### **GET /api/products** - Get all products
- **Headers:**
  ```json
  {
    "Authorization": "Bearer your_jwt_token_here"
  }
  ```

#### **POST /api/products** - Create a new product
- **Headers:**
  ```json
  {
    "Authorization": "Bearer your_jwt_token_here",
    "Content-Type": "application/json"
  }
  ```
- **Request Body:**
  ```json
  {
    "product_name": "New Product",
    "description": "This is a new product.",
    "keyword": "sample, keyword"
  }
  ```

#### **PUT /api/products/:id** - Update a product
- **Request Body:** (Optional fields to update)
  ```json
  {
    "product_name": "Updated Product Name"
  }
  ```

#### **DELETE /api/products/:id** - Delete a product
- **Headers:**
  ```json
  {
    "Authorization": "Bearer your_jwt_token_here"
  }
  ```

---

## Error Handling
| Error | Description |
|-------|-------------|
| 401 Unauthorized | No token provided or invalid token |
| 404 Not Found | Product does not exist |
| 429 Too Many Requests | Exceeded the 100 requests/hour limit |

---

## Future Enhancements
- ✅ Connect to a real database (MongoDB/PostgreSQL)
- ✅ Implement user roles (admin, customer)
- ✅ Improve request validation

---

## License
MIT License. Free to use and modify. 🚀

