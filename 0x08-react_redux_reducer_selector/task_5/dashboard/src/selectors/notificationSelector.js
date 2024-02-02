// src/selectors/notificationSelector.js

// Selector for the filter
export const filterTypeSelected = (state) => state.notifications.filter;

// Selector for all notifications
export const getNotifications = (state) => state.notifications.messages;

// Selector for unread notifications
export const getUnreadNotifications = (state) =>
  state.notifications.messages.filter((notification) => !notification.read);

