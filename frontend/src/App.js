import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NovoAnuncio from './NovoAnuncio';
import history from './history';

class App extends React.Component {

  render() {

    return(
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/novoanuncio" component={NovoAnuncio} />
        </Switch>
      </Router>
    )
  };
}

export default App;

