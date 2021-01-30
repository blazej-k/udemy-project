import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from '../reducers/store';
import Page from './Page'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../style/index.scss'

const App: FC = () => {


  const PageProvider = <Provider store={store}><Page /></Provider>

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Router>
        <Route path='/' component={() => PageProvider} />
    </Router>
  );
}

export default App;
