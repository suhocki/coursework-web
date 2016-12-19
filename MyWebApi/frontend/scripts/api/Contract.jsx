define(function (require) {
  return {
    post(contract) {
      const form = require('../../libs/form');
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
      }).then(response => response.json())
    }
  }
})
