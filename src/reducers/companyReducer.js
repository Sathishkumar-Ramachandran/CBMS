const initialState = {
    companyId: null,
    user: null,
    authenticated: false,
  };
  
  const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMPANY_ID':
        return {
          ...state,
          companyId: action.payload.companyId,
        };
      case 'SET_AUTHENTICATED':
        return {
          ...state,
          authenticated: true
        };
      default:
        return state;
    }   
  };
  
  export default companyReducer;