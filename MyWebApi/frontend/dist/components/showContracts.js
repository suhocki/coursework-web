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
          'tbody',
          null,
          React.createElement(
            'span',
            null,
            'User: ',
            users[users.length - 1].Name
          ),
          users.fill(1).map(function (el, i) {
            return React.createElement(
              'span',
              null,
              'User: ',
              users[i].Name
            );
          })
        );
      }
    }]);

    return ShowUsers;
  }(React.Component);
});
//# sourceMappingURL=D:\VisualStudioProjects\MyWebApi\MyWebApi\frontend\components\ShowContracts.js.map