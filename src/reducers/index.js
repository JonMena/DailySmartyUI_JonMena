import { combineReducers } from 'redux';

import { reducer as Form } from 'redux-form';

const rootReducer = combineReducers({
  form:Form
});

export default rootReducer;