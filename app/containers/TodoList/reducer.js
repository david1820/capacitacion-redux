/*
 *
 * TodoList reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_CHECK_ITEM_ACTION,
  HANDLE_CHANGE_VALUE_MODAL,
  HANDLE_OPEN_TODO_MODAL,
  SET_NEW_TODO_ACTION,
  HANDLE_EDIT_TODO_ACTION,
  SAVE_EDIT_TODO_ACTION,
} from './constants';

const initialState = fromJS({
  index: -1,
  open: false,
  titulo: '',
  descripcion: '',
  onEdit: false,
  isDone: false,
  todos: [{
    titulo: 'Capacitacion',
    descripcion: 'Imaprtir capacitacion de Redux',
    isDone: false,
  },
  {
    titulo: 'Capacitacion',
    descripcion: 'Impartir capacitacion de GraphQL',
    isDone: false,
  },
  ],
});

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_CHECK_ITEM_ACTION: {
      const { index } = action;
      const todos = state.get('todos');
      const updatedTodos = todos.update(index, (todo) => {
        const isDone = todo.get('isDone');
        return todo.set('isDone', !isDone);
      });
      return state.set('todos', List.of(...updatedTodos));
    }
    case HANDLE_CHANGE_VALUE_MODAL:
      return state.set(action.key, action.value);
    case HANDLE_OPEN_TODO_MODAL:
      return state.set('open', action.isOpen);
    case HANDLE_EDIT_TODO_ACTION:
      return state.merge({ onEdit: action.onEdit, index: action.index });
    case SET_NEW_TODO_ACTION: {
      const todos = state.get('todos');
      const newTodos = todos.push(fromJS(action.todo));
      return state.set('todos', List.of(...newTodos));
    }
    case SAVE_EDIT_TODO_ACTION: {
      const index = state.get('index');
      const todos = state.get('todos');
      const titulo = state.get('titulo');
      const descripcion = state.get('descripcion');
      const editTodo = todos.update(index, (todo) => (
        todo.merge({
          titulo,
          descripcion,
        })
      ));
      return state.merge({ todos: List.of(...editTodo), onEdit: action.onEdit });
    }
    default:
      return state;
  }
}

export default todoListReducer;
