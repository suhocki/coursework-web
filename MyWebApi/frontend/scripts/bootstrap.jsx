requirejs.config({
  paths: {
    'react': [
      'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js',
      '../libs/react.min'
    ],
    'reactDOM': [
      'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min.js',
      '../libs/react-dom.min'
    ],
    'reactRouter': [
      'https://cdnjs.cloudflare.com/ajax/libs/react-router/2.8.1/ReactRouter.min.js',
      '../libs/ReactRouter.min'
    ]
  }
});

define(['react', 'reactDOM', 'components/Routes'], (React, ReactDOM, Routes) => ReactDOM.render(React.createElement(Routes), document.querySelector('app')));
