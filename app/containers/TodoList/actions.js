/*
 *
 * TodoList actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_CHECK_ITEM_ACTION,
  HANDLE_CHANGE_VALUE_MODAL,
  HANDLE_OPEN_TODO_MODAL,
  SET_NEW_TODO_ACTION,
  HANDLE_EDIT_TODO_ACTION,
  SAVE_EDIT_TODO_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setCheckValueAction(index) {
  return {
    type: SET_CHECK_ITEM_ACTION,
    index,
  };
}

export function handleOpenTodoModal(isOpen) {
  return {
    type: HANDLE_OPEN_TODO_MODAL,
    isOpen,
  };
}

export function handleChangeValueModal(key, value) {
  return {
    type: HANDLE_CHANGE_VALUE_MODAL,
    key,
    value,
  };
}

export function setNewTodoAction(todo) {
  return {
    type: SET_NEW_TODO_ACTION,
    todo,
  };
}

export function handleEditTodoAction(onEdit, index) {
  return {
    type: HANDLE_EDIT_TODO_ACTION,
    onEdit,
    index,
  };
}

export function saveEditTodoAction() {
  return {
    type: SAVE_EDIT_TODO_ACTION,
  };
}
