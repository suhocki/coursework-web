define(function (require) {
  return {
    post(car) {
      return fetch('http://localhost:15234/api/cars', {
        method: 'post',
        body: car
      }).then(response => response.json())
    }
  }
})
