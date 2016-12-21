const IMG = 'data:image/png;base64,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';

define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;
  const Card = require('components/card');
  const Car = require('../api/Car');

  return class Home extends React.Component {
    constructor(props) {
      super();

      this.state = {
        cars: [],
        searched: ''
      }

      if (!props.location.query.filter) {
        Car.get().then(cars => this.setState({cars}))
      }
    }

    componentDidUpdate() {
      var filter = this.props.location.query.filter;

      if (filter && filter != this.state.searched) {
        this.setState({
          searched: filter
        })

        Car.getByFilter(filter).then(cars => this.setState({cars}))
      }
    }

    render() {
      return (
        <content>
          {this.state.cars.map(car =>
            <Card
              key={car.Id}
              id={car.Id}
              name={car.Name}
              photo={car.Photo}/>
          )}
        </content>
      )
    }
  }
});
