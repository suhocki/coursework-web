'use strict';

define(function (require) {
  return {
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
//# sourceMappingURL=D:\VisualStudioProjects\MyWebApi\MyWebApi\frontend\api\Car.js.map