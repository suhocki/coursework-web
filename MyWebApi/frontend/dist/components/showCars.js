'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var User = require('../api/User');

  var user = {
    name: '',
    isAdmin: '',
    password: '',
    phone: ''
  };

  return function (_React$Component) {
    _inherits(ShowUsers, _React$Component);

    function ShowUsers() {
      _classCallCheck(this, ShowUsers);

      var _this = _possibleConstructorReturn(this, (ShowUsers.__proto__ || Object.getPrototypeOf(ShowUsers)).call(this));

      User.get().then(function (data) {
        _this.setState({
          users: data
        });
      });

      _this.state = {
        users: []
      };
      return _this;
    }

    _createClass(ShowUsers, [{
      key: 'render',
      value: function render() {
        var users = this.state.users;
        console.log(users);
        if (!users.length) return React.createElement(
          'p',
          null,
          'Loading!'
        );

        return React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            '\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F'
          ),
          React.createElement(
            'span',
            null,
            'User: ',
            users[users.length - 1].Name
          ),
          React.createElement(
            'form',
            { className: 'userAdd' },
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'tel',
                placeholder: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
                onChange: this.onPhoneChange })
            ),
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'password',
                placeholder: '\u041F\u0430\u0440\u043E\u043B\u044C',
                onChange: this.onPasswordChange })
            ),
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'text',
                placeholder: '\u0418\u043C\u044F',
                onChange: this.onNameChange })
            ),
            React.createElement(
              'p',
              null,
              React.createElement('input', {
                type: 'text',
                placeholder: '\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440?',
                onChange: this.onIsAdminChange })
            ),
            React.createElement('input', {
              type: 'button',
              value: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
              onClick: this.onSubmit })
          )
        );
      }
    }]);

    return ShowUsers;
  }(React.Component);
});
//# sourceMappingURL=D:\VisualStudioProjects\MyWebApi\MyWebApi\frontend\components\showCars.js.map