import React, { FC } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ErrorComponent from './ErrorComponent'
import Page from './Page'

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/404' exact component={ErrorComponent}/>
        <Route component={Page}/>
      </Switch>
    </Router>
  );
}

export default App;
  