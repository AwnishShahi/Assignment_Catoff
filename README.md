# NestJS PostgreSQL CRUD API

I've set up a NestJS application with basic CRUD operations for Users and WalletAddress tables in a PostgreSQL database. I also implemented validation, error handling, and API documentation with Swagger. Here's a brief summary of what I did:
Created a NestJS project and set up PostgreSQL integration.
Defined entities and DTOs for Users and WalletAddress.
Implemented CRUD services and controllers.
Added validation using class-validator and class-transformer.
Implemented global error handling.
Added Swagger for API documentation.
Tested the API endpoints using Postman.

## Setup Instructions
Clone the Repository
```bash
   git clone <repository-url>
   cd <project-directory>
```
Install Dependencies:
```bash
npm install
```
   
## Database Setup:
Ensure you have PostgreSQL installed and running.
Create a new database named nestjsdb.
Define the structure of the Users and WalletAddress tables in the database.
Update src/app.module.ts file with your PostgreSQL database credentials.

## Start the Server:
```bash
npm start
```
## API Documentation

The API follows a standard RESTful approach for CRUD operations on Users and Wallet Addresses.

### Users Endpoints


| Method | URL                 | Description                                 |
|--------|---------------------|---------------------------------------------|
| GET    | /users              | Get all users.                              |
| GET    | /users/:id          | Get a single user by ID.                    |                 
| POST   | /users              | Create a new user.                          |
| PUT    | /users/:id          | Update an existing user.                    |
| DELETE | /users/:id          | Delete a user by ID.                        |


### WalletAddress Endpoints


| Method | URL                     | Description                                  |
|--------|-------------------------|----------------------------------------------|
| GET    | /wallet-address         | Get all wallet addresses.                    |
| GET    | /wallet-address/:id     | Get a single wallet address by ID.           |
| POST   | /wallet-address         | Create a new wallet address.                 |
| PUT    | /wallet-address/:id     | Update an existing wallet address.           |
| DELETE | /wallet-address/:id     | Delete a wallet address by ID.               |
