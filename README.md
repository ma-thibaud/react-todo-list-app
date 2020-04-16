# React To-Do List App

Simple Todo App created using React/Redux and Express.

## Table of contents
* [Features](#features)
* [Technologies](#technologies)
* [Getting started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Testing](#testing)

## Features

- Shows a list of todos
- Highlights incomplete todos that are due more than 5 days ago
- User can add a todo to the list
- User can delete a todo from the list
- User can mark a todo as completed

## Technologies

**App built with:**
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
- [Reselect](https://www.npmjs.com/package/reselect)
- [Styled-Components](https://styled-components.com/)
- [Babel](https://babeljs.io/) / [Webpack](https://webpack.js.org/)

**Server built with:**
- [Express](https://expressjs.com/)

## Getting started

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/get-npm)

### Installation

1. Download or clone the repo

```sh
git clone https://github.com/ma-thibaud/react-todo-list-app.git
cd react-todo-list-app
```

2. Install the dependencies

```sh
npm install
```

3. Run the app and the server

```sh
npm run dev
```

The app should now be running on [localhost:3000](http://localhost:3000/) and the server on [localhost:8080](http://localhost:8080/todos).

## Testing

**App tested with:**
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)

```node
npm run test
```
