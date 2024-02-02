// src/selectors/notificationSelector.test.js
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelectors', () => {
  const state = {
    notifications: {
      filter: 'all',
      messages: [
        { id: 1, text: 'Notification 1', read: false },
        { id: 2, text: 'Notification 2', read: true },
        { id: 3, text: 'Notification 3', read: false },
      ],
    },
  };

  test('filterTypeSelected should return the correct filter', () => {
    const result = filterTypeSelected(state);
    expect(result).toEqual('all');
  });

  test('getNotifications should return the list of notifications', () => {
    const result = getNotifications(state);
    const expected = [
      { id: 1, text: 'Notification 1', read: false },
      { id: 2, text: 'Notification 2', read: true },
      { id: 3, text: 'Notification 3', read: false },
    ];
    expect(result).toEqual(expected);
  });

  test('getUnreadNotifications should return the list of unread notifications', () => {
    const result = getUnreadNotifications(state);
    const expected = [
      { id: 1, text: 'Notification 1', read: false },
      { id: 3, text: 'Notification 3', read: false },
    ];
    expect(result).toEqual(expected);
  });
});

