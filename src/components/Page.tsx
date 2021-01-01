import React, { FC, useEffect, useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './Page/home/Home'
import MyCourses from './Page/courses/myCourses/MyCourses'
import Courses from './Page/courses/allCourses/Courses'
import Header from './Page/header/Header'
import Admin from './Page/admin/Admin'
import { useDispatch } from 'react-redux';
import { getState, getUserCourses } from '../actions/UserActions';
import Contact from './Page/contact/Contact';
import Footer from './Page/footer/Footer';

const Page: FC = () => {

    const dispatch = useDispatch()

    const [subscribe, setSubscribe] = useState(true)

 
    useEffect(() => {
        if((subscribe) && (window.localStorage?.getItem('store'))){
            const store: User = JSON.parse(window.localStorage?.getItem('store') || '')
            if(store.isUserLogged){
                dispatch(getState(store)) //state must be equal to local storage
                dispatch(getUserCourses(store._id || ''))
            }
        }
        return () => setSubscribe(false)
    }, [])

    return (
        <>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/myCourses' component={MyCourses} />
                <Route path='/courses' component={Courses} />
                <Route path='/contact' component={Contact} />
                <Route path='/admin' component={Admin} />
                <Redirect to='/404' />
            </Switch>
            <Footer/>
        </>
    );
}

export default Page;