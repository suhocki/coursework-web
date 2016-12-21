'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var User = require('../api/User');
  var Link = require('reactRouter').Link;

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
      key: 'renderContracts',
      value: function renderContracts(user) {
        return user.Contracts.map(function (contract) {
          return React.createElement(
            'li',
            { key: contract.Car.Id },
            React.createElement(
              Link,
              { to: '/contract/' + contract.Id },
              contract.Car.Name
            )
          );
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var users = this.state.users;

        if (!users.length) return React.createElement(
          'p',
          null,
          'Loading!'
        );

        return React.createElement(
          'content',
          null,
          users.map(function (user) {
            return React.createElement(
              'card-component',
              { key: user.Id },
              React.createElement(
                'strong',
                null,
                user.Name
              ),
              React.createElement(
                'span',
                null,
                user.Phone
              ),
              React.createElement(
                'div',
                null,
                'Contracts: ',
                !user.Contracts.length ? React.createElement(
                  'span',
                  null,
                  'No contracts!'
                ) : React.createElement(
                  'ol',
                  null,
                  _this2.renderContracts(user)
                )
              )
            );
          })
        );
      }
    }]);

    return ShowUsers;
  }(React.Component);
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\components\ShowContracts.js.map