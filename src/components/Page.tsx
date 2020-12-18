import React, { FC, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './Page/home/Home'
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
            <Header />
            <AnimatedSwitch
                atEnter={{ opacity: 1 }}
                atLeave={{ opacity: 0.3 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route path='/' exact component={Home} />
                <Route path='/myCourses' component={MyCourses} />
                <Route path='/courses' component={Courses} />
                <Route path='/contact' component={() => <h1>kontakt</h1>} />
                <Route path='/admin' component={Admin} />
                <Redirect to='/404' />
            </AnimatedSwitch>
        </>
    );
}

export default Page;