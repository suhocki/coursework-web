'use strict';

define(function (require) {
  return {
    get: function get() {
      return fetch('http://localhost:15234/api/users', {
        method: 'get'
      }).then(function (response) {
        return response.json();
      });
    },
    post: function post(object) {
      var form = require('../../libs/form');
      return fetch('http://localhost:15234/api/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=windows-1251'
        },
        body: form.encode({
          name: object.name,
          adminType: object.isAdmin,
          phone: object.phone,
          password: object.password
        })
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=D:\VisualStudioProjects\MyWebApi\MyWebApi\frontend\api\User.js.map