/*
 *
 * Users reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  HANDLE_NEW_USER_MODAL,
  HANDLE_CHANGE_VALUE_MODAL,
  HANDLE_EDIT_USER_MODAL,
} from './constants';

const initialState = fromJS({
  open: false,
  id: '',
  name: '',
  email: '',
  birthday: '',
  onEdit: false,
});

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case HANDLE_NEW_USER_MODAL:
      return state.set('open', action.isOpen);
    case HANDLE_CHANGE_VALUE_MODAL:
      return state.set(action.key, action.value);
    case HANDLE_EDIT_USER_MODAL:
      return state.merge({
        onEdit: action.onEdit,
        id: action.id,
      });
    default:
      return state;
  }
}

export default usersReducer;
