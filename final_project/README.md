# Ticket Management System

This is a Ticket Management System built with React, Chakra UI, React Router, and Axios. It uses `json-server` as a mock backend and `reqres.in` for user authentication.

## Features

- Home, About, and Contact pages.
- Tickets page with ticket creation, viewing, editing, and deletion.
- Login and logout functionality.
- Protected routes for authenticated users.

## Tech Stack

- React
- Chakra UI
- React Router
- Axios
- json-server
- reqres.in

## Getting Started

### Running the Application

1. **Run the Backend:**
   - Navigate to the `Backend` folder:
     ```sh
     cd Backend
     ```
   - Start the `json-server` using the `db.json` file:
     ```sh
     npx json-server --watch db.json --port 5000
     ```

2. **Run the Frontend:**
   - Navigate to the `frontend` folder:
     ```sh
     cd frontend
     ```
   - Start the Vite development server:
     ```sh
     npm install
     npm run dev
     ```

3. **Access the Application:**
   - Open your browser and go to `http://localhost:3000` to see the UI.

## Usage

- Navigate to `/login` to log in.
- Access other pages like Home, About, Contact, and Tickets after logging in.
- Create, view, edit, and delete tickets from the Tickets page.
