// reducers/notificationReducer.js
import { fromJS } from 'immutable';
import { normalize } from 'normalizr';
import { notificationSchema, notificationsNormalizer } from '../schema/notifications';

const initialState = fromJS({
  // Your initial state
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge(normalizedData);

    case 'SET_TYPE_FILTER':
      return state.set('typeFilter', action.payload);

    case 'MARK_AS_READ':
      return state.setIn(['your', 'path', 'to', 'the', 'item'], action.payload);

    // Other cases...

    default:
      return state;
  }
};

export default notificationReducer;

