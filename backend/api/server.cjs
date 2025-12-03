// server.js (CommonJS Syntax)
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
// __dirname is automatically defined in CommonJS modules

const app = express();
const PORT = 8080; // 👈 CRITICAL CHANGE: BACKEND LISTENS ON 8080
// Correct path to users.json, looking in the parent directory (backend)
const USERS_FILE = path.join(__dirname, '..', 'users.json'); 
const saltRounds = 10; 

// Middleware
app.use(cors());
app.use(express.json()); 

// Helper functions for file management
const loadUsers = () => {
  // ... (file loading logic remains the same)
};

const saveUsers = (users) => {
  // ... (file saving logic remains the same)
};

// ... (registration and login endpoints remain the same) ...

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});