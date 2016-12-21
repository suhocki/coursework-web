define(require => {
  const React = require('react');
  const Car = require('../api/Car');

  return class CarView extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        car: []
      }

      Car.get(props.params.id).then(car => this.setState({car}))
    }

    render() {
      return (
        <content data-flow="vertical" data-align="left">
          <h2>{this.state.car.Name}</h2>

          <img className="photo" src={this.state.car.Photo}/>

          <p>
            <strong>Year:</strong> {this.state.car.Year}
          </p>
          <p>
            <strong>Range:</strong> {this.state.car.Range}
          </p>
          <p>
            <strong>Color:</strong> {this.state.car.Color}
          </p>
          <p>
            <strong>Features:</strong> {this.state.car.Features}
          </p>

          <p>{this.state.car.Description}</p>
        </content>
      )
    }
  }
});
