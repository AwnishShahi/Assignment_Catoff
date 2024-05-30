# NestJS PostgreSQL CRUD API

This project is a basic NESTjs application that manages a PostgreSQL database with two tables: `Users` and `WalletAddress`. It implements CRUD operations for these tables through RESTful API endpoints.

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
Install Dependencies:

bash
Copy code
npm install
Database Setup:

Ensure you have PostgreSQL installed and running.
Create a new database named nestjsdb.
Define the structure of the Users and WalletAddress tables in the database.
Update src/app.module.ts file with your PostgreSQL database credentials.

Start the Server:

bash
Copy code
npm start
API Documentation
Users Endpoints
GET /users: Get all users.
GET /users/
: Get a single user by ID.
POST /users: Create a new user.
PUT /users/
: Update an existing user.
DELETE /users/
: Delete a user by ID.
WalletAddress Endpoints
GET /wallet-address: Get all wallet addresses.
GET /wallet-address/
: Get a single wallet address by ID.
POST /wallet-address: Create a new wallet address.
PUT /wallet-address/
: Update an existing wallet address.
DELETE /wallet-address/
: Delete a wallet address by ID.
Request and Response Formats
Create User (POST /users)
Request Body:

json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com"
}
Response Body:

json
Copy code
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
Get User (GET /users/
)
Response Body:

json
Copy code
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}