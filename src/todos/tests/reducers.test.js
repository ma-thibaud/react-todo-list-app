import { expect } from 'chai';
import { todos } from '../reducers';

describe('The todos reducers', () => {
  it('Adds a new todo when CREATE_TODO action is received', () => {
    const fakeTodo = { text: 'New todo', isCompleted: false };
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: {
        todo: fakeTodo
      }
    };
    const originalState = { isLoading: false, data: [] };

    const expected = {
      isLoading: false,
      data: [fakeTodo]
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it('Deletes an incomplete todo when REMOVE_TODO action is received', () => {
    const fakeTodo = { text: 'Incomplete todo', isCompleted: false };
    const fakeAction = {
      type: 'REMOVE_TODO',
      payload: {
        todo: fakeTodo
      }
    };
    const originalState = { isLoading: false, data: [fakeTodo] };

    const expected = {
      isLoading: false,
      data: []
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
  it('Deletes a completed todo when REMOVE_TODO action is received', () => {
    const fakeTodo = { text: 'Completed todo', isCompleted: true };
    const fakeAction = {
      type: 'REMOVE_TODO',
      payload: {
        todo: fakeTodo
      }
    };
    const originalState = { isLoading: false, data: [fakeTodo] };

    const expected = {
      isLoading: false,
      data: []
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
