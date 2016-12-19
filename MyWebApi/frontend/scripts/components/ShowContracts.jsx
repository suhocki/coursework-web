define(require => {
  const React = require('react');
  const User = require('../api/User');

  var user = {
    name: '',
    isAdmin: '',
    password: '',
    phone: '',
  }

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

    render() {
      var users = this.state.users;
      console.log(users);
      if (!users.length)
        return <p>Loading!</p>;

      return (
        <tbody>
          <span>User: {users[users.length-1].Name}</span>

          {users.fill(1).map((el, i) =>
            <span>User: {users[i].Name}</span>
          )}
        </tbody>

      )
    }
  };
});
