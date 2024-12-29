const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Get tasks from tasks.json
const getTasks = () => {
    const data = fs.existsSync('tasks.json') ? fs.readFileSync('tasks.json', 'utf8') : '[]';
    return JSON.parse(data);
};

// Fetch all tasks
app.get('/tasks', (req, res) => {
    res.json(getTasks());
});

// Add a new task
app.post('/tasks', (req, res) => {
    const tasks = getTasks();
    tasks.push(req.body);
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
    res.status(201).json({ message: 'Task added successfully' });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
