import { combineReducers } from 'redux';

import { reducer as Form } from 'redux-form';

import posts from "./postsReducer"

const rootReducer = combineReducers({
  form:Form
});

export default rootReducer;