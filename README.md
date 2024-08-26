# Online Voting App 


This project is the backend for an online voting application designed for class elections. It supports managing candidates and counting votes. The project is currently hosted and accessible via the following link: [Online Voting App](https://online-voting-app-st7t.onrender.com)


To interact with the API, please use Postman or a similar tool to send HTTP requests. The API is designed to handle CRUD operations for candidates and retrieve vote counts.

## Features

- **Manage Candidates:** Add, update, and delete candidates for the election.
- **Vote Counting:** Retrieve the count of votes for each candidate.

## Endpoints

1. **GET /candidates**  
   Retrieves a list of all candidates.

2. **POST /candidates**  
   Adds a new candidate. Requires data like `name`, `party`, and `voteCount`.

3. **PUT /candidates/:candidateID**  
   Updates the details of a specific candidate by their ID.

4. **DELETE /candidates/:candidateID**  
   Deletes a candidate by their ID.

5. **GET /vote/count**  
   Gets the current vote count for all candidates, sorted by the highest vote count.

## Authentication

Some endpoints require admin access. Admin authentication is handled through JSON Web Tokens (JWT).

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Arshad-khan05/Online-Voting-App.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Online-Voting-App
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables (e.g., MongoDB connection string, JWT secret).

5. Start the server:

    ```bash
    npm start
    ```

## Usage

Access the deployed application through the link provided above to interact with the backend.

