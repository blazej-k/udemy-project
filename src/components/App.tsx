import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from '../reducers/store';
import ErrorComponent from './ErrorComponent'
import Page from './Page'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App: FC = () => {


  const PageProvider = <Provider store={store}><Page /></Provider>

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Router>
      {/* <Switch> */}
        <Route path='/' component={() => PageProvider} />
        {/* <Route exact path='/404' component={ErrorComponent} /> */}
      {/* </Switch> */}
    </Router>
  );
}

export default App;
