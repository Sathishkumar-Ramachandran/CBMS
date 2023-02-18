export  const LocalStorageService = (function(){
    var _service;

    function _getService() {
        if(!_service) {
          _service = this;
          return _service
      }
      return _service
    }

    function _setToken(token) {
      localStorage.setItem('auth-token', token);      
    }  
    function _getAccessToken() {
      return localStorage.getItem('auth-token');
    }
    
    function _getRefreshToken() {
      return localStorage.getItem('refresh_token');
    }

    function _clearToken() {          
      localStorage.clear();     
    }
    
   return {
      getService : _getService,
      setToken : _setToken,
      getAccessToken : _getAccessToken,   
      getRefreshToken : _getRefreshToken,
      clearToken : _clearToken
    }
})();