import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Page/Home'
import Nav from './Page/nav/Nav'
import MyCourses from './Page/courses/myCourses/MyCourses'
import Courses from './Page/courses/allCourses/Courses'
import Header from './Page/header/Header'

const Page: FC = () => {
    return (
        <>
            <Nav/>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/myCourses' component={MyCourses} />
                <Route path='/courses' component={Courses} />
                <Route path='/contact' component={() => <h1>kontakt</h1>} />
                <Route path='/admin' component={() => <h1>admin</h1>} />
                <Redirect to='/404' />
            </Switch>
        </>
    );
}

export default Page;