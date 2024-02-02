// task_3/dashboard/src/reducers/notificationReducer.js

import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const initialState = {
  filter: 'DEFAULT',
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const notifications = action.data.map(notification => ({ ...notification, isRead: false }));
      return {
        ...state,
        notifications,
      };
    }
    case MARK_AS_READ: {
      const { index } = action;
      const updatedNotifications = state.notifications.map(notification =>
        notification.id === index ? { ...notification, isRead: true } : notification
      );
      return {
        ...state,
        notifications: updatedNotifications,
      };
    }
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default notificationReducer;

