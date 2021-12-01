
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const todos = require(__dirname + "\\" + "models\\todos.json");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.use("/content", express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get('/todos', (_, res) => {
  res.header("Content-Type","application/json");
  res.sendFile("./models/todos.json", { root: __dirname });
});

app.get('/todos/overdue', (req, res) => {
  res.sendStatus(501).end();
});

app.get('/todos/completed', (req, res) => {
  res.sendStatus(501).end();
});

app.post('/todos', (req, res) => {
  res.sendStatus(501).end();
});

app.patch('/todos/:id', (req, res) => {
  res.sendStatus(501).end();
});

app.patch('/todos/:id/complete', (req, res) => {
  res.sendStatus(501).end();
});

app.patch('/todos/:id/undo', (req, res) => {
  res.sendStatus(501).end();
});

app.delete('/todos/:id', (req, res) => {
  res.sendStatus(501).end();
});

app.listen(port, function () {
    console.log(`Node server is running... http://localhost:${port}`);
});

module.exports = app;