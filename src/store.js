import { configureStore } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  companyId: null,
  isAuthenticated: false,
  userID: null
};

// Define the reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMPANY_ID':
      return {
        ...state,
        companyId: action.payload,
      };
    case 'SET_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case 'SET_USERID':
      return{...state ,userID :  action.payload.userID}
    default:
      return state;
  }
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
