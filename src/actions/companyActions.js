export const setCompanyId = (companyId) => ({
    type: 'SET_COMPANY_ID',
    payload: companyId,
  });
  
  export const setAuthenticated = (isAuthenticated) => ({
    type: 'SET_AUTHENTICATED',
    payload: isAuthenticated,
  });
  
  export const setUserId = (userId) => ({
    type: "SET_USERID",
    payload: userId
  })