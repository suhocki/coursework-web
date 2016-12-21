define(require => {
  const React = require('react');
  const Contract = require('../api/Contract');

  return class ContractView extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        contract: {}
      }

      Contract.get(props.params.id).then(contract => this.setState({contract}))
    }

    render() {
      var contract = this.state.contract;

      if (contract.Id) {
        return (
          <content data-flow="vertical" data-align="left">
            <h2>{contract.User.Name} - {contract.Car.Name}</h2>

            <img className="photo" src={contract.Car.Photo}/>

            <p>
              <strong>Starts:</strong> {(new Date(contract.Starts)).toLocaleDateString('ru-RU')}
            </p>
            <p>
              <strong>Ends:</strong> {(new Date(contract.Ends)).toLocaleDateString('ru-RU')}
            </p>
            <p>
              <strong>Price:</strong> {contract.Price}
            </p>
          </content>
        )
      } else {
        return <p>Loading...</p>
      }
    }
  }
});
