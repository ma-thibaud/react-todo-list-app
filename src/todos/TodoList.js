import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
  getTodos,
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos
} from './selectors';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import './TodoList.css';

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onMarkAsCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <div className="list-wrapper">
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
    </div>
  );
  return isLoading ? loadingMessage : content;
};

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
