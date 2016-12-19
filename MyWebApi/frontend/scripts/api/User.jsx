define(function (require){
  return {
    get() {
      return fetch('http://localhost:15234/api/users', {
        method: 'get'
      }).then(response => response.json())
    },

    post(object) {
      const form = require('../../libs/form');
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
      }).then(response => response.json())
    }
  }

})
