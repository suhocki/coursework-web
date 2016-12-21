'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var Link = require('reactRouter').Link;
  var Contract = require('../api/Contract');
  var Car = require('../api/Car');
  var User = require('../api/User');

  var contract = {
    starts: '',
    ends: '',
    price: '',
    userId: '',
    carId: ''
  };

  return function (_React$Component) {
    _inherits(AddContract, _React$Component);

    function AddContract() {
      _classCallCheck(this, AddContract);

      var _this = _possibleConstructorReturn(this, (AddContract.__proto__ || Object.getPrototypeOf(AddContract)).call(this));

      var date = new Date();
      var futureDate = new Date();
      futureDate.setMonth(futureDate.getMonth() + 1);

      _this.state = {
        cars: [],
        users: [],
        starts: date.toISOString(),
        ends: futureDate.toISOString()
      };

      Car.get().then(function (cars) {
        return _this.setState({
          cars: cars,
          carId: cars[0].Id
        });
      });

      User.get().then(function (users) {
        return _this.setState({
          users: users,
          userId: users[0].Id
        });
      });
      return _this;
    }

    _createClass(AddContract, [{
      key: 'onSubmit',
      value: function onSubmit(event) {
        var fields = ['starts', 'ends', 'price', 'userId', 'carId'];

        var formData = new FormData();

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var field = _step.value;

            formData.append(field, this.state[field]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        Contract.post(formData).then(function (response) {
          console.log(response);
        });

        event.preventDefault();
      }
    }, {
      key: 'onStartsChange',
      value: function onStartsChange(event) {
        this.setState({ starts: event.length ? event : event.target.value });
      }
    }, {
      key: 'onEndsChange',
      value: function onEndsChange(event) {
        this.setState({ ends: event.length ? event : event.target.value });
      }
    }, {
      key: 'onPriceChange',
      value: function onPriceChange(event) {
        this.setState({ price: event.target.value });
      }
    }, {
      key: 'onCarIdChange',
      value: function onCarIdChange(event) {
        this.setState({ carId: event.target.value });
      }
    }, {
      key: 'onUserIdChange',
      value: function onUserIdChange(event) {
        this.setState({ userId: event.target.value });
      }
    }, {
      key: 'getCurrentDate',
      value: function getCurrentDate() {
        var date = new Date();
        return date.toLocaleDateString('ru-RU').split('.').reverse().join('-');
      }
    }, {
      key: 'getFutureDate',
      value: function getFutureDate() {
        var date = new Date();
        date.setMonth(date.getMonth() + 1);
        return date.toLocaleDateString('ru-RU').split('.').reverse().join('-');
      }
    }, {
      key: 'renderCarSelect',
      value: function renderCarSelect(cars) {
        return cars.map(function (car) {
          return React.createElement(
            'option',
            { key: car.Id, value: car.Id },
            car.Name
          );
        });
      }
    }, {
      key: 'renderUsersSelect',
      value: function renderUsersSelect(users) {
        return users.map(function (user) {
          return React.createElement(
            'option',
            { key: user.Id, value: user.Id },
            user.Name
          );
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var users = this.state.users;

        return React.createElement(
          'content',
          { 'data-flow': 'vertical' },
          React.createElement(
            'h2',
            null,
            'Add a new contract'
          ),
          React.createElement(
            'form',
            { className: 'contractAdd' },
            React.createElement('input', {
              type: 'date',
              placeholder: 'Start date',
              value: this.getCurrentDate(),
              onChange: this.onStartsChange.bind(this) }),
            React.createElement('input', {
              type: 'date',
              placeholder: 'End time',
              value: this.getFutureDate(),
              onChange: this.onEndsChange.bind(this) }),
            React.createElement('input', {
              type: 'number',
              placeholder: '\u0426\u0435\u043D\u0430',
              onChange: this.onPriceChange.bind(this) }),
            React.createElement(
              'select',
              { onChange: this.onCarIdChange.bind(this) },
              this.renderCarSelect(this.state.cars)
            ),
            React.createElement(
              'select',
              { onChange: this.onUserIdChange.bind(this) },
              this.renderUsersSelect(this.state.users)
            ),
            React.createElement(
              'button',
              { onClick: this.onSubmit.bind(this) },
              'Submit'
            )
          )
        );
      }
    }]);

    return AddContract;
  }(React.Component);
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\components\AddContract.js.map