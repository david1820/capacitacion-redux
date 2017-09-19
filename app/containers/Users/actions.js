/*
 *
 * Users actions
 *
 */

import {
  DEFAULT_ACTION,
  HANDLE_NEW_USER_MODAL,
  HANDLE_CHANGE_VALUE_MODAL,
  HANDLE_EDIT_USER_MODAL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function handleNewUserModal(isOpen) {
  return {
    type: HANDLE_NEW_USER_MODAL,
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

export function handleEditUserModal(onEdit, id) {
  return {
    type: HANDLE_EDIT_USER_MODAL,
    onEdit,
    id,
  };
}
