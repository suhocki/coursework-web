'use strict';

define(function (require) {
  return {
    post: function post(object) {
      var form = require('../api/form');

      return fetch('http://localhost:15234/api/cars', {
        method: 'post',
        body: {
          name: object.name,
          photo: object.photo,
          available: object.phone
        }
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\api\postCar.js.map