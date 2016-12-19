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
        <div>
          <p>Добавление пользователя</p>
          <span>User: {users[users.length-1].Name}</span>
          <form className="userAdd">
            <p><input
              type="tel"
              placeholder="Телефон"
              onChange={this.onPhoneChange}/>
            </p>
            <p><input
              type="password"
              placeholder="Пароль"
              onChange={this.onPasswordChange}/>
            </p>
            <p><input
              type="text"
              placeholder="Имя"
              onChange={this.onNameChange}/>
            </p>
            <p><input
              type="text"
              placeholder="Администратор?"
              onChange={this.onIsAdminChange}/>
            </p>
            <input
              type="button"
              value="Добавить"
              onClick={this.onSubmit}/>
          </form>
        </div>
      )
    }
  };
});
