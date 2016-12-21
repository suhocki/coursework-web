define(function (require) {
  return {
    get(id) {
      return fetch('http://localhost:15234/api/Contracts/' + (id || ''))
        .then(response => response.json())
    },

    post(formData) {
      return fetch('http://localhost:15234/api/Contracts', {
        method: 'post',
        body: formData
      }).then(response => response.json())
    }
  }
})
