define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;

  return class Home extends React.Component {
    render() {
      return (
        <main>
          <aside>
            <div><Link to='/register'>Register</Link></div>
            <div><Link to='/addCar'>Add car</Link></div>
          </aside>
        </main>
      )
    }
  }
});
