import React from 'react';
import { renderRoutes } from "react-router-config";
import { routes } from './routes';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {renderRoutes(routes)}
      </div>

    );
  }
}

export default App;
