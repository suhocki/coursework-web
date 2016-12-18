'use strict';

requirejs.config({
  paths: {
    'react': ['https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react', 'frontend/libs/react.min'],
    'react-dom': ['https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom', 'frontend/libs/react-dom.min'],
    'react-router': ['https://cdnjs.cloudflare.com/ajax/libs/react-router/2.8.1/ReactRouter.min', 'frontend/libs/ReactRouter.min']
  }
});

define(['react', 'react-dom', 'routes'], function (React, ReactDOM, Routes) {
  return ReactDOM.render(React.createElement(Routes), document.querySelector('app'));
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\components\bootstrap.js.map