requirejs.config({
  paths: {
    'react': [
      'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min',
      '../libs/react.min'
    ],
    'reactDOM': [
      'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom',
      '../libs/react-dom.min'
    ],
    'reactRouter': [
      'https://cdnjs.cloudflare.com/ajax/libs/react-router/2.8.1/ReactRouter.min',
      '../libs/ReactRouter.min'
    ]
  }
});

define(['react', 'reactDOM', 'components/Routes'], (React, ReactDOM, Routes) => ReactDOM.render(React.createElement(Routes), document.querySelector('app')));
