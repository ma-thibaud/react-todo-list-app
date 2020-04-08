// Imports
import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';

// Styled-Components
const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;

// App
const App = () => (
  <AppContainer>
    <TodoList />
  </AppContainer>
);

// Exports
export default hot(module)(App);
