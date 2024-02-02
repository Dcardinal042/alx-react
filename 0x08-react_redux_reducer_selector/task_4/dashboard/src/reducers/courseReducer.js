// src/reducers/courseReducer.js
import { fromJS } from 'immutable';
import { normalize } from 'normalizr';
import { courseSchema, coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  // Your initial state
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COURSE_SUCCESS':
      const normalizedData = coursesNormalizer(action.data);
      return state.merge(normalizedData);

    case 'SELECT_COURSE':
    case 'UNSELECT_COURSE':
      return state.setIn(['your', 'path', 'to', 'the', 'item'], action.payload);

    // Other cases...

    default:
      return state;
  }
};

export default courseReducer;

