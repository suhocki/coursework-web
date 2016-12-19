define(function (require) {
  return {
    post(formData) {
      return fetch('http://localhost:15234/api/cars', {
        method: 'post',
        body: formData
      }).then(response => response.json())
    }
  }
})
