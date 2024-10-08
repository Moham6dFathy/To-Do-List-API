# To-Do List API

## Overview

The **To-Do List API** is a simple RESTful service designed to manage tasks for a To-Do list application. This API allows users to create, read, update, and delete tasks. It is built using **Node.js**, **Express.js**, and **MongoDB** for persistent storage. The API follows REST principles, ensuring clear and predictable interaction with the task data.

## Features

- **Create a task**: Add a new to-do item with a title and description.
- **View all tasks**: Retrieve the entire list of tasks, optionally filtering by completion status.
- **Update a task**: Edit task details or mark it as completed/incomplete.
- **Delete a task**: Remove tasks from the list by ID.
- **Search tasks**: Search tasks by title or description keywords.

## Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for handling routes and requests
- **MongoDB**: NoSQL database for storing task data
- **Mongoose**: ODM for MongoDB for easy interaction with the database
- **Postman**: Used for testing the API endpoints
- **JSON Web Tokens (JWT)**: For user authentication (optional)

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
