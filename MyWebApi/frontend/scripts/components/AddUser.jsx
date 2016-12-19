define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;
  const User = require('../api/User');

  var user = {
    name: '',
    isAdmin: '',
    password: '',
    phone: '',
  }

  return class AddUser extends React.Component {
    constructor() {
      super();

      this.state = {
        users: []
      };
    }

    onNameChange (event) {
      event.preventDefault()
      user.name = event.target.value;
    }

    onIsAdminChange (event) {
      event.preventDefault()
      user.isAdmin = event.target.value;
    }

    onPasswordChange (event) {
      event.preventDefault()
      user.password = event.target.value;
    }

    onPhoneChange (event) {
      event.preventDefault()
      user.phone = event.target.value;
    }

    onSubmit(event) {
      User.post(object).then(data => {
        console.log(data);
      })
    }

    render() {
      return (
        <div>
          <p>Добавление пользователя</p>
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
