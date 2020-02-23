let DataManager = (function() {
  let instance;

  //private singleton factory
  class DataManagerFactory {
    constructor() {
      this.authManager = AuthManager.getInstance();
    }

    //get value from key
    get(key, defaultValue) {
      if (!this.authManager.isLoggedIn()) {
        //load data from cache
        return getCookie(key) || defaultValue;
      } else {
        //load data from server
      }
    }

    //stores data in cache or server if user is loggedin
    store(key, value) {
      if (!this.authManager.isLoggedIn()) {
        //store data in cache
        setCookie(key, value, 30);
      } else {
        //store data on server
      }
    }
  }

  //create only once instance
  function createInstance() {
    var object = new DataManagerFactory();
    object.constructor = null;
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();