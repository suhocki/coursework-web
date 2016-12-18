'use strict';

define({
  request: function request(url) {
    return fetch(url, {
      method: 'get'
    }).then(function (response) {
      return response.json();
    });
  }
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\api\getUsers.js.map