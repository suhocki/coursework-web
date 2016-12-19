define(require => {
  const React = require('react');
  const Link = require('reactRouter').Link;
  const Car = require('../api/Car');

  return class AddCar extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    imageChosen(event) {
      for (let file of event.target.files) {
        if (!file.type.match('image.*'))
          continue;

        let reader = new FileReader();
        reader.addEventListener('load', () => this.state.image = reader.result);
        reader.readAsDataURL(file);
      }
    }

    submit(event) {
      var formData = new FormData();
      formData.append('available', true);
      formData.append('name', 'test');
      formData.append('photo', this.state.image);

      Car.post(formData);

      event.preventDefault();
    }

    render() {
      return (
        <content data-flow="vertical">
          <h2>Add a new car</h2>

          <form>
            <input type="text" placeholder="Name"/>
            <input type="file" onChange={this.imageChosen.bind(this)}/>
            <button onClick={this.submit.bind(this)}>Submit</button>
          </form>
        </content>
      )
    }
  }
});
