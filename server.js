import express from 'express';
import bodyParser from 'body-parser'
import { v1 as uuidv1 } from 'uuid';

const app = express();

app.use(bodyParser.json());

const today = Date.now()

let todos = [
  {
    id: uuidv1(),
    text: 'Organize photo shoot 📷',
    createdAt: today,
    isCompleted: false
  },
  {
    id: uuidv1(),
    text: 'Bring an umbrella ☂️',
    createdAt: today - 86400000*7,
    isCompleted: false
  },
  {
    id: uuidv1(),
    text: 'Buy groceries 🧀',
    createdAt: today - 86400000*14,
    isCompleted: true
  }
]

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.get('/todos', (req, res) => {
  console.log('GET /todos');
  res.status(200).json(todos);
})

app.post('/todos', (req, res) => {
  const { text } = req.body;
  console.log('POST /todos');
  const newTodo = {
    id: uuidv1(),
    text: text,
    createdAt: new Date(),
    isCompleted: false
  }
  todos.push(newTodo)
  res.status(200).json(newTodo);
})

app.post('/todos/:id/completed', (req, res) => {
  const id = req.params.id;
  console.log(`POST /todos/${id}/completed`);
  const todoIndex = todos.findIndex(todo => todo.id === id)
  todos[todoIndex].isCompleted = true,
  res.status(200).json(todos[todoIndex]);
})

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  console.log(`DELETE /todos/${id}`);
  const todoIndex = todos.findIndex(todo => todo.id === id)
  const deletedTodo = todos.splice(todoIndex, 1);
  res.status(200).json(deletedTodo[0]);
})

app.listen(8080, () => console.log('Listening on port 8080'));
