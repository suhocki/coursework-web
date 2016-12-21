'use strict';

define(function (require) {
  return {
    get: function get(id) {
      return fetch('http://localhost:15234/api/Contracts/' + (id || '')).then(function (response) {
        return response.json();
      });
    },
    post: function post(formData) {
      return fetch('http://localhost:15234/api/Contracts', {
        method: 'post',
        body: formData
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\api\Contract.js.map