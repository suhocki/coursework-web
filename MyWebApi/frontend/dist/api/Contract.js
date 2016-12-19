'use strict';

define(function (require) {
  return {
    post: function post(contract) {
      var form = require('../../libs/form');
      return fetch('http://localhost:15234/api/Contracts', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=windows-1251'
        },
        body: form.encode({
          starts: contract.starts,
          ends: contract.ends,
          price: contract.price,
          userId: contract.userId,
          carId: contract.carId
        })
      }).then(function (response) {
        return response.json();
      });
    }
  };
});
//# sourceMappingURL=D:\VisualStudioProjects\MyWebApi\MyWebApi\frontend\api\Contract.js.map