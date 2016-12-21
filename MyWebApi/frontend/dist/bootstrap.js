'use strict';

requirejs.config({
  paths: {
    'react': ['https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min', '../libs/react.min'],
    'reactDOM': ['https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min', '../libs/react-dom.min'],
    'reactRouter': ['https://cdnjs.cloudflare.com/ajax/libs/react-router/2.8.1/ReactRouter.min', '../libs/ReactRouter.min']
  }
});

define(['react', 'reactDOM', 'components/Routes'], function (React, ReactDOM, Routes) {
  return ReactDOM.render(React.createElement(Routes), document.querySelector('app'));
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\bootstrap.js.map