'use strict';

define(function (require) {
  return {
    request: function request(url, object) {
      var form = require('../../libs/form');

      return fetch(url, {
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
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\api\postUser.js.map