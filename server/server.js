// server/server.js

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Old route (keep it)
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from Node.js! 👋' });
});

// NEW route — returns a list of users
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Mathan',  role: 'Tech Lead',        email: 'mathantest1Test@example.com' },
    { id: 2, name: 'Bharani', role: 'Senior Developer',  email: 'bharani@example.com' },
    { id: 3, name: 'Priya',   role: 'QA Engineer',       email: 'priya@example.com' },
    { id: 4, name: 'Arjun',   role: 'DevOps Engineer',   email: 'arjun@example.com' },
  ];
  res.json(users);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});