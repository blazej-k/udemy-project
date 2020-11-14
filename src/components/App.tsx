import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ErrorComponent from './ErrorComponent'
import MainComponent from './Page'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/404' exact component={ErrorComponent}/>
        <Route component={MainComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
  