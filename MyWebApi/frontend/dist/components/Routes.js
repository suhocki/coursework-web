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

  var ShowContracts = require('components/ShowContracts');

  var CarView = require('components/CarView');
  var ContractView = require('components/ContractView');

  var Car = require('../api/Car');

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      _classCallCheck(this, App);

      var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

      _this.timeout = null;
      return _this;
    }

    _createClass(App, [{
      key: 'search',
      value: function search(event) {
        event.persist();

        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          var query = event.target.value;

          Car.getByFilter(query).then(function (cars) {
            browserHistory.push('/?filter=' + query);
          });
        }, 200);
      }
    }, {
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
              'Car rental'
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
              { to: '/showContracts', activeClassName: 'current' },
              'Show contracts'
            ),
            React.createElement('span', { className: 'separator' }),
            React.createElement('input', { type: 'text', placeholder: 'Search...', className: 'search', onChange: this.search.bind(this) })
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
            '=',
            React.createElement(Route, { path: '/addCar', component: AddCar }),
            React.createElement(Route, { path: '/addUser', component: AddUser }),
            React.createElement(Route, { path: '/addContract', component: AddContract }),
            React.createElement(Route, { path: '/showContracts', component: ShowContracts }),
            React.createElement(Route, { path: '/car/:id', component: CarView }),
            React.createElement(Route, { path: '/contract/:id', component: ContractView })
          )
        );
      }
    }]);

    return Routes;
  }(React.Component);
});
//# sourceMappingURL=D:\VisualStudioProjects\MyWebApi\MyWebApi\frontend\components\Routes.js.map