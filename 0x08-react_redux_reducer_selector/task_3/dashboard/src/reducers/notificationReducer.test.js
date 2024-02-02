// task_3/dashboard/src/reducers/notificationReducer.test.js

import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('handles FETCH_NOTIFICATIONS_SUCCESS', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [],
    };

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    const newState = notificationReducer(initialState, action);

    expect(newState).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    });
  });

  it('handles MARK_AS_READ', () => {
    // Test similar to the previous one, but with MARK_AS_READ action
    // ...

  });

  it('handles SET_TYPE_FILTER', () => {
    // Test similar to the previous ones, but with SET_TYPE_FILTER action
    // ...

  });
});

