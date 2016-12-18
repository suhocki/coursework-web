define(function (require) {
  return {
    request(url, object) {
      const form = require('../../libs/form');

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
      }).then(response => response.json())
    }
  }
})
