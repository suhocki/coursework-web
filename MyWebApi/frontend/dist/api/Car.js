'use strict';

define(function (require) {
  return {
    get: function get() {
      return fetch('http://localhost:15234/api/cars/').then(function (response) {
        return response.json();
      });
    },
    getByFilter: function getByFilter(filter) {
      return fetch('http://localhost:15234/api/cars/?filter=' + filter).then(function (response) {
        return response.json();
      });
    },
    post: function post(formData) {
      return fetch('http://localhost:15234/api/cars', {
        method: 'post',
        body: formData
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\api\Car.js.map