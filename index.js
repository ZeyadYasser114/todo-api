const express = require('express');
const app = express();
const PORT = 3000;

let tasks = [
    {id: 1, title: "Buy the mona lisa", done: false},
    {id: 2, title: "Develop a black hole", done: false},
    {id: 3, title: "Meet abraham linclon",done: false}
];
app.get('/', (req, res) => {
    res.json({ name: "Task API", version: "1.0", endpoints: ["/tasks"] });
});
app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task){
        return res.status(404).json({error: `Task ${id} not found`});
    }
    res.json(task);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});