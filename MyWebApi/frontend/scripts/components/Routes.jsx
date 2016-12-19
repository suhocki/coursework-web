define(function (require) {
  const React = require('react');
  const Route = require('reactRouter').Route;
  const Router = require('reactRouter').Router;
  const browserHistory = require('reactRouter').browserHistory;

  const AddCar = require('components/AddCar');
  const Home = require('components/Home');
  const AddUser = require('components/AddUser');
  const AddContract = require('components/AddContract');

  const ShowUsers = require('components/ShowUsers');
  const ShowCars = require('components/ShowCars');
  const ShowContracts = require('components/ShowContracts');

  return class Routes extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path="/" component={Home}></Route>
          <Route path="/addUser" component={AddUser}></Route>
          <Route path="/addCar" component={AddCar}></Route>
          <Route path="/addContract" component={AddContract}></Route>

          <Route path="/showUsers" component={ShowUsers}></Route>
          <Route path="/showCars" component={ShowCars}></Route>
          <Route path="/showContracts" component={ShowContracts}></Route>
        </Router>
      )
    }
  };
});
