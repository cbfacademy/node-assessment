# Node.js Assessment: Todo List API

For your unit 5 assessment you are required to create a RESTful API  using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/).

The API should `CREATE`, `READ`, `UPDATE` and `DELETE` from a list of todos in a file [todos.json](src/models/todos.json). The [todos.json](src/models/todos.json) file is used as the server's data store and can be found in the `models` folder.

## JSON Structure of a Todo

```json
  {
    "id":"01507581-9d12-4c3a-bb60-19d539a11189",
    "name":"Learn to use Adobe Photoshop",
    "created":"2021-11-20T18:25:43.511Z",
    "due":"2021-12-23T23:05:03.352Z",
    "completed":false
  }
```

## Assessment Criteria

1. The root currently serves the file `index.html`. The `index.html` file should outline the expected endpoints for the service.

1. The `index.html` file should reference a `favicon.ico`, `logo.png` and a `styles.css` file.

1. Add a `<title>` tag that includes your name e.g. Welcome to `Monica's` Todo List API

1. Add the functionality for all the endpoints described below:

| Method | URL | Description | Example URL | Request Body | Status Code | Response Body |
|---|---|---|---|---|---|---|
| `GET` | `/`| Returns a static HTML file `index.html` containing a `favicon.ico`, `logo.png` and reference to an external stylesheet `styles.css`. | `http://localhost:8080/` | | 200 | HTML page|
|` GET` | `/todo` | Return all todos from the `todos.json` file  | `http://localhost:8080/todo` | | 200 | `[{"id":"01507581-9d12-4c3a-bb60-19d539a11189","name":"Learn to use Adobe Photoshop","created":"2021-11-20T18:25:43.511Z","due":"2021-12-23T23:05:03.352Z","completed":false}, {...}, {...} ]` |
| `GET` | `/todos/:id` | Return a specific todo with the corresponding `id` | `http://localhost:8080/todos/01507581-9d12-4c3a-bb60-19d539a11189` | | 200 or 404 if id not found | `{"id":"01507581-9d12-4c3a-bb60-19d539a11189","name":"Learn to use Adobe Photoshop","created":"2021-11-20T18:25:43.511Z","due":"2021-12-23T23:05:03.352Z","completed":false}` |
| `GET` | `/todos/overdue` | Return a list of __overdue__ todos or an empty list if there are no overdue todos. Todos can be filtered based on their `due` date attribute |`http://localhost:8080/todos/overdue` | | 200 |`[]` or `[{todo1},{todo2},{...}]` |
| `GET` | `/todos/completed` | Return a list of __completed__ todos or an empty list, if no todos have been completed. Todos can be filtered based on their `due` date attribute. | `http://localhost:8080/todos/completed` | | 200 | `[]` or `[{todo1},{todo2},{...}]` |
| `POST`* | `/todos` | Add a new todo to the todo list | `http://localhost:8080/todos` | `{'name' : 'Buy oatmilk x 2'}` | 201 (Created), 209 if todo with same `name` exists, 404 if incorrect data submitted| |
| `PATCH`* | `/todos/:id` | Edit the `name` and/or `due` date attributes of a todo.  | `http://localhost:8080/todos/:9d127581-0150-4c3a-bb60-1118919d539a` | `{"name":"Buy 3 Cartons of Oat Milk","due":"2021-12-23T18:25:43.511Z"}` | 200 (OK) or 404 (Not Found) if invalid id or request attributes |  | `http://localhost:8080/todos/01507581-9d12-4c3a-bb60-19d539a11189` | | 200 | |
| `PATCH`* | `/todos/:id/complete` | Update todo, set attribute complete to `true` | `http://localhost:8080/todos/todos/01507581-9d12-4c3a-bb60-19d539a11189/complete` | | 200 | |
| `PATCH`* | `/todos/:id/undo` | Update todo, set attribute complete to `false` |`http://localhost:8080/todos/todos/01507581-9d12-4c3a-bb60-19d539a11189/undo` | | 200 | |
| `DELETE`* | `todos/:id` | Deletes a todo by `id` |`http://localhost:8080/todos/01507581-9d12-4c3a-bb60-19d539a11189` | | 200 | |

*_POST, PUT, PATCH and DELETE methods may need a API testing tool such as Postman to test._

## How to submit

Commit all files and folders to the repo and push to your remote repo for assessment.



