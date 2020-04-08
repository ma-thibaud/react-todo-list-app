import { expect } from 'chai';
import { getCompletedTodos, getIncompleteTodos } from '../selectors';

const fakeTodos = [{
  text: 'Say Hello',
  isCompleted: true
}, {
  text: 'Say Goodbye',
  isCompleted: false
}, {
  text: 'Clim Mt Everest',
  isCompleted: false
}];

describe('The todos selectors', () => {
  it ('getCompletedTodos returns only completed todos', () => {
    const expected = [{
      text: 'Say Hello',
      isCompleted: true
    }];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
  it ('getIncompleteTodos returns only incomplete todos', () => {
    const expected = [{
      text: 'Say Goodbye',
      isCompleted: false
    }, {
      text: 'Clim Mt Everest',
      isCompleted: false
    }];

    const actual = getIncompleteTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
