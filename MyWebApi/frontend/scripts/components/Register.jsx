define(require => {
  const React = require('react');
  const getUsers = require('../api/getUsers');
  const postUser = require('../api/postUser');

  var object = {
    name: '',
    isAdmin: '',
    password: '',
    phone: '',
  }

  return class Register extends React.Component {
    constructor() {
      super();

      getUsers.request('http://localhost:15234/api/users').then(data => {
        this.setState({
          users: data
        });
      })

      this.state = {
        users: []
      };
    }

    onNameChange (event) {
      event.preventDefault()
      object.name = event.target.value;
    }

    onIsAdminChange (event) {
      event.preventDefault()
      object.isAdmin = event.target.value;
    }

    onPasswordChange (event) {
      event.preventDefault()
      object.password = event.target.value;
    }

    onPhoneChange (event) {
      event.preventDefault()
      object.phone = event.target.value;
    }

    onSubmit(event) {
      postUser.request('http://localhost:15234/api/users',object).then(data => {
        console.log(data);
      })
    }

    render() {
      var users = this.state.users;

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
