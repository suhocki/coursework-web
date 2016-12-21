'use strict';

define(function (require) {
  return {
    get: function get() {
      return fetch('http://localhost:15234/api/users').then(function (response) {
        return response.json();
      });
    },
    post: function post(object) {
      return fetch('http://localhost:15234/api/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=windows-1251'
        },
        body: {
          name: object.name,
          adminType: object.isAdmin,
          phone: object.phone,
          password: object.password
        }
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\api\User.js.map