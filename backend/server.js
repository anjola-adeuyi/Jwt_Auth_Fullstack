import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready now!!!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// - **POST /api/users** - Register new user
// - **POST** `/api/users/auth` - Authenticate user and get token
// - **POST** `/api/users/logout` - Logout user and clear cookie

// - **GET** `/api/users` - Get all users
// - **GET** `/api/users/profile` - Get user profile
// - **GET** `/api/users/:id` - Get user by ID

// - **PUT** `/api/users/profile` - Update user profile
// - **PUT** `/api/users/:id` - Update user by ID

// - **DELETE** `/api/users/:id` - Delete user
