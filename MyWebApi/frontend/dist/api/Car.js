'use strict';

define(function (require) {
  return {
    post: function post(car) {
      return fetch('http://localhost:15234/api/cars', {
        method: 'post',
        body: car
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\api\Car.js.map