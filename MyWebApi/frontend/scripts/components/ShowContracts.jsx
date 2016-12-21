define(require => {
  const React = require('react');
  const User = require('../api/User');
  const Link = require('reactRouter').Link;

  return class ShowUsers extends React.Component {
    constructor() {
      super();

      User.get().then(data => {
        this.setState({
          users: data
        });
      })

      this.state = {
        users: []
      };
    }

    renderContracts(user) {
      return user.Contracts.map(contract => {
        return <li key={contract.Car.Id}>
          <Link to={'/contract/' + contract.Id}>{contract.Car.Name}</Link>
        </li>
      })
    }

    render() {
      var users = this.state.users;

      if (!users.length)
        return <p>Loading!</p>;

      return (
        <content>
          {users.map(user => {
            return (
              <card-component key={user.Id}>
                <strong>{user.Name}</strong>
                <span>{user.Phone}</span>

                <div>
                  Contracts: {
                    !user.Contracts.length ? <span>No contracts!</span> : <ol>{this.renderContracts(user)}</ol>
                  }
                </div>
              </card-component>
            )
          })}
        </content>
      )
    }
  };
});
