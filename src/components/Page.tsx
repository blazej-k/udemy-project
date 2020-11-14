import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Page/Home'
import Nav from './Page/nav/Nav'
import MyCourses from './Page/courses/myCourses/MyCourse'

const MainComponent: FC = () => { 
    return (
        <>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/myCourses' component={MyCourses} />
                <Route path='/courses' component={() => <p>kursy</p>} />
                <Route path='/myCourses' component={() => <p>moje kursy</p>} />
                <Redirect to='/404' />
            </Switch>
        </>
    );
}

export default MainComponent;