define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;

  return class Home extends React.Component {
    render() {
      return (
        <main>
          <aside>
            <div><Link to='/addUser'>Add user</Link></div>
            <div><Link to='/addCar'>Add car</Link></div>
            <div><Link to='/addContract'>Add contract</Link></div>
            <p></p>
            <div><Link to='/showUsers'>Show users</Link></div>
            <div><Link to='/showCars'>Show cars</Link></div>
            <div><Link to='/showContracts'>Show contracts</Link></div>
          </aside>
        </main>
      )
    }
  }
});
