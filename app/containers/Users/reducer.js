/*
 *
 * Users reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  HANDLE_NEW_USER_MODAL,
} from './constants';

const initialState = fromJS({
  open: false,
  id: '59b365c648f9f73a429d8261',
});

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case HANDLE_NEW_USER_MODAL:
      return state.set('open', action.isOpen);
    default:
      return state;
  }
}

export default usersReducer;
