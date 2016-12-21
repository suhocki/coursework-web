define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;
  const Contract = require('../api/Contract');
  const Car = require('../api/Car');
  const User = require('../api/User');

  var contract = {
    starts: '',
    ends: '',
    price: '',
    userId: '',
    carId: '',
  }

  return class AddContract extends React.Component {
    constructor() {
      super();

      var date = new Date();
      var futureDate = new Date();
      futureDate.setMonth(futureDate.getMonth() + 1);

      this.state = {
        cars: [],
        users: [],
        starts: date.toISOString(),
        ends: futureDate.toISOString()
      }

      Car.get().then(cars => this.setState({
        cars,
        carId: cars[0].Id
      }));

      User.get().then(users => this.setState({
        users,
        userId: users[0].Id
      }))
    }

    onSubmit(event) {
      const fields = ['starts', 'ends', 'price', 'userId', 'carId'];

      var formData = new FormData();

      for (let field of fields)
        formData.append(field, this.state[field]);

      Contract.post(formData).then(response => {
        console.log(response);
      })

      event.preventDefault();
    }

    onStartsChange(event) {
      this.setState({starts: event.length ? event : event.target.value})
    }

    onEndsChange(event) {
      this.setState({ends: event.length ? event : event.target.value})
    }

    onPriceChange(event) {
      this.setState({price: event.target.value})
    }

    onCarIdChange(event) {
      this.setState({carId: event.target.value})
    }

    onUserIdChange (event) {
      this.setState({userId: event.target.value})
    }

    getCurrentDate() {
      var date = new Date();
      return date.toLocaleDateString('ru-RU').split('.').reverse().join('-')
    }

    getFutureDate() {
      var date = new Date();
      date.setMonth(date.getMonth() + 1);
      return date.toLocaleDateString('ru-RU').split('.').reverse().join('-')
    }

    renderCarSelect(cars) {
      return cars.map(car => {
        return (
          <option key={car.Id} value={car.Id}>
            {car.Name}
          </option>
        )
      })
    }

    renderUsersSelect(users) {
      return users.map(user => {
        return (
          <option key={user.Id} value={user.Id}>
            {user.Name}
          </option>
        )
      })
    }

    render() {
      var users = this.state.users;

      return (
        <content data-flow="vertical">
          <h2>Add a new contract</h2>

          <form className="contractAdd">
            <input
              type="date"
              placeholder="Start date"
              value={this.getCurrentDate()}
              onChange={this.onStartsChange.bind(this)}/>

            <input
              type="date"
              placeholder="End time"
              value={this.getFutureDate()}
              onChange={this.onEndsChange.bind(this)}/>

            <input
              type="number"
              placeholder="Цена"
              onChange={this.onPriceChange.bind(this)}/>

            <select onChange={this.onCarIdChange.bind(this)}>
              {this.renderCarSelect(this.state.cars)}
            </select>

            <select onChange={this.onUserIdChange.bind(this)}>
              {this.renderUsersSelect(this.state.users)}
            </select>

            <button onClick={this.onSubmit.bind(this)}>Submit</button>
          </form>
        </content>
      )
    }
  };
});
