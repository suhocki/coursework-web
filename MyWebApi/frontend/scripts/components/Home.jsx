define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;
  const Car = require('../api/Car');

  class Card extends React.Component {
    render() {
      return (
        <card-component>
          <strong>{this.props.name}</strong>
          <img src={this.props.photo}/>
        </card-component>
      )
    }
  }

  return class Home extends React.Component {
    constructor() {
      super();

      this.state = {
        cars: []
      }

      Car.get().then(cars => this.setState({cars}))
    }

    render() {
      return (
        <content>
          {this.state.cars.map(car =>
            <Card
              name={car.Name}
              photo={car.Photo}/>
          )}
        </content>
      )
    }
  }
});
