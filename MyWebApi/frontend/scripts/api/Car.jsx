define(function (require) {
  return {
    get() {
      return fetch('http://localhost:15234/api/cars/')
        .then(response => response.json())
    },

    getById(id) {
      return fetch('http://localhost:15234/api/cars/' + id)
        .then(response => response.json())
    },

    getByFilter(filter) {
      return fetch('http://localhost:15234/api/cars/?filter=' + filter)
        .then(response => response.json())
    },

    post(formData) {
      return fetch('http://localhost:15234/api/cars', {
        method: 'post',
        body: formData
      }).then(response => response.json())
    }
  }
})
