define(function (require) {
  const React = require('react');
  const Route = require('reactRouter').Route;
  const Router = require('reactRouter').Router;
  const browserHistory = require('reactRouter').browserHistory;

  const AddCar = require('components/AddCar');
  const Home = require('components/Home');
  const Register = require('components/Register');

  return class Routes extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path="/" component={Home}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/addCar" component={AddCar}></Route>
        </Router>
      )
    }
  };
});
