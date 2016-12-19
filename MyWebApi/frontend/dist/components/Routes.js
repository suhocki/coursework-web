'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var Link = require('reactRouter').Link;
  var Route = require('reactRouter').Route;
  var Router = require('reactRouter').Router;
  var browserHistory = require('reactRouter').browserHistory;

  var AddCar = require('components/AddCar');
  var Home = require('components/Home');
  var AddUser = require('components/AddUser');
  var AddContract = require('components/AddContract');

  var ShowUsers = require('components/ShowUsers');
  var ShowCars = require('components/ShowCars');
  var ShowContracts = require('components/ShowContracts');

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'main',
          null,
          React.createElement(
            'aside',
            null,
            React.createElement(
              'h2',
              null,
              'CarSearch'
            ),
            React.createElement(
              Link,
              { to: '/', activeClassName: 'current' },
              'Home'
            ),
            React.createElement(
              Link,
              { to: '/addUser', activeClassName: 'current' },
              'Add user'
            ),
            React.createElement(
              Link,
              { to: '/addCar', activeClassName: 'current' },
              'Add car'
            ),
            React.createElement(
              Link,
              { to: '/addContract', activeClassName: 'current' },
              'Add contract'
            ),
            React.createElement(
              Link,
              { to: '/showUsers', activeClassName: 'current' },
              'Show users'
            ),
            React.createElement(
              Link,
              { to: '/showContracts', activeClassName: 'current' },
              'Show contracts'
            )
          ),
          this.props.children
        );
      }
    }]);

    return App;
  }(React.Component);

  return function (_React$Component2) {
    _inherits(Routes, _React$Component2);

    function Routes() {
      _classCallCheck(this, Routes);

      return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
    }

    _createClass(Routes, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          Router,
          { history: browserHistory },
          React.createElement(
            Route,
            { component: App },
            React.createElement(Route, { path: '/', component: Home }),
            React.createElement(Route, { path: '/addUser', component: AddUser }),
            React.createElement(Route, { path: '/addCar', component: AddCar }),
            React.createElement(Route, { path: '/addContract', component: AddContract }),
            React.createElement(Route, { path: '/showUsers', component: ShowUsers }),
            React.createElement(Route, { path: '/showCars', component: ShowCars }),
            React.createElement(Route, { path: '/showContracts', component: ShowContracts })
          )
        );
      }
    }]);

    return Routes;
  }(React.Component);
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\components\Routes.js.map