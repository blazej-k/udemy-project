import React, { FC } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { store } from '../reducers/store';
import ErrorComponent from './ErrorComponent'
import Page from './Page'

const App: FC = () => {

  const PageProvider = <Provider store={store}><Page/></Provider>

  return (
    <Router>
      <Switch>
        <Route path='/404' exact component={ErrorComponent}/>
        <Route component={() => PageProvider}/>
      </Switch>
    </Router>
  );
}

export default App;
  