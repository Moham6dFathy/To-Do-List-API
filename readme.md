# To-Do List API

## Overview

The **To-Do List API** allows users to create and manage their own tasks after creating an account. Each user can register, log in, and manipulate their personal tasks, including creating, reading, updating, and deleting them. Built using **Node.js**, **Express.js**, and **MongoDB**, this API ensures that each user’s data is securely stored and accessible only by the account owner.

## Features

- **User Authentication**: Users can create an account, log in, and receive a JSON Web Token (JWT) for secure interactions with the API.
- **Create a Task**: Authenticated users can add new to-do items with a title, description, and completion status.
- **View Tasks**: Users can retrieve their own tasks, with the ability to filter by completion status.
- **Update a Task**: Users can edit their tasks or mark them as completed/incomplete.
- **Delete a Task**: Users can remove their tasks by ID.
- **Search Tasks**: Search through a user’s tasks by title or description.

## Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for handling routes and requests
- **MongoDB**: NoSQL database for storing user and task data
- **Mongoose**: ODM for MongoDB for easy interaction with the database
- **Postman**: Used for testing the API endpoints
- **JSON Web Tokens (JWT)**: Used for user authentication and authorization

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **MongoDB** installed locally or use a cloud database (e.g., MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list-api.git
   cd todo-list-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a .env file:

   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/todoDB
   JWT_SECRET=your_jwt_secret
   ```

4. Run the application:

   ```bash
   npm start
   ```

- The API will be accessible at **http://localhost:3000**.
