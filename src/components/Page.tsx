import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Page/Home'
import Nav from './Page/nav/Nav'

const MainComponent = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/myCourses' component={() => <p>moje kursy</p>} />
                <Route path='/courses' component={() => <p>kursy</p>} />
                <Route path='/myCourses' component={() => <p>moje kursy</p>} />
                <Redirect to='/404' />
            </Switch>
        </>
    );
}

export default MainComponent;