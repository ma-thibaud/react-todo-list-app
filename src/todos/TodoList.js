// Imports
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos
} from './selectors';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';

// Styled-Components
const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

// Component
const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onMarkAsCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompleteTodos.map(todo => <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onMarkAsCompletedPressed={onMarkAsCompletedPressed}/>)}
        <h3>Completed:</h3>
        {completedTodos.map(todo => <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkAsCompletedPressed={onMarkAsCompletedPressed}/>)}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

// Redux
const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onMarkAsCompletedPressed: id => dispatch(completeTodoRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
