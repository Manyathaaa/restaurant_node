# Restaurant Node Project

A RESTful API for restaurant management built with Node.js, Express, and MongoDB. This project supports user authentication, food management, order processing, and admin controls.

---

## Features

- **User Management**
  - Register, login, and authentication
  - User roles: client, admin, vendor, driver

- **Food Management**
  - Create, update, delete, and list food items
  - Food schema includes title, description, image, price, category, tags, ratings, and restaurant reference

- **Order Management**
  - Place orders with multiple food items
  - Track order status: preparing, prepared, on the way, delivered
  - Payment details included

- **Admin Controls**
  - Only admins can create, update, or delete food items
  - Middleware for admin access

---

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt for password hashing

---

## API Endpoints

### User

- `POST /api/v1/users/register` – Register a new user
- `POST /api/v1/users/login` – Login and receive JWT token

### Food

- `POST /api/v1/food/create` – Create a food item (admin only)
- `GET /api/v1/food/all` – Get all food items
- `PUT /api/v1/food/update/:id` – Update a food item (admin only)
- `DELETE /api/v1/food/delete/:id` – Delete a food item (admin only)

### Order

- `POST /api/v1/food/placeorder` – Place a new order
- `POST /api/v1/food/orderStatus/:orderId` – Update order status (admin only)

---

## Data Models

### User

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashedpassword",
  "address": "123 Main St",
  "phone": 1234567890,
  "usertype": "admin",
  "profile": "https://cdn3.vectorstock.com/i/1000x1000/51/87/student-avatar-user-profile-icon-vector-47025187.jpg",
  "answer": "My first pet's name"
}
```

### Food

```json
{
  "title": "Cheese Burger",
  "description": "A delicious burger with cheese.",
  "image": "https://example.com/burger.jpg",
  "price": 8.99,
  "category": "Fast Food",
  "isAvailable": true,
  "ratings": 4.5,
  "ratingCount": 120,
  "foodTags": ["burger", "cheese"],
  "code": "CB123",
  "restaurantId": "64a7b2f4c3e8f8a1b2c3d4e5"
}
```

### Order

```json
{
  "foods": ["64a7b2f4c3e8f8a1b2c3d4e5", "64a7b2f4c3e8f8a1b2c3d4e6"],
  "payment": {
    "method": "credit card",
    "transactionId": "TXN123456789",
    "amount": 25.99
  },
  "buyer": "64a7b2f4c3e8f8a1b2c3d4e7",
  "status": "preparing"
}
```

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/manyatha/restaurant-node.git
   cd restaurant-node
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file and add your MongoDB URI and JWT secret.

4. **Run the server**
   ```bash
   npm start
   ```

---

## Folder Structure

```
my1stpro/
│
├── controllers/
│   └── foodcontrollers.js
├── middlewares/
│   ├── authmiddleware.js
│   └── adminmiddleware.js
├── models/
│   ├── foodModels.js
│   ├── orderModels.js
│   └── usersModel.js
├── routes/
│   └── foodroutes.js
├── README.md
└── ...
```

---


##
