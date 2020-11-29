import React, { FC, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Page/Home'
import Nav from './Page/nav/Nav'
import MyCourses from './Page/courses/myCourses/MyCourses'
import Courses from './Page/courses/allCourses/Courses'
import Header from './Page/header/Header'
import Admin from './Page/admin/Admin'
import { useDispatch } from 'react-redux';
import { getState } from '../actions/UserActions';

const Page: FC = () => {

    const dispatch = useDispatch()

  
    useEffect(() => {
      const store = window.localStorage.getItem('store')
      store && dispatch(getState(JSON.parse(store)))
    }, [])

    return (
        <>
            <Nav/>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/myCourses' component={MyCourses} />
                <Route path='/courses' component={Courses} />
                <Route path='/contact' component={() => <h1>kontakt</h1>} />
                <Route path='/admin' component={Admin} />
                <Redirect to='/404' />
            </Switch>
        </>
    );
}

export default Page;