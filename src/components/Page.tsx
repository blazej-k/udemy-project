import React, { FC, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Page/home/Home'
import MyCourses from './Page/courses/myCourses/MyCourses'
import Courses from './Page/courses/allCourses/Courses'
import Header from './Page/header/Header'
import Admin from './Page/admin/Admin'
import { useDispatch } from 'react-redux';
import { getState, userCoursesActions } from '../actions/UserActions';
import Contact from './Page/contact/Contact';
import Footer from './Page/footer/Footer';
import ErrorComponent from './ErrorComponent';

const Page: FC = () => {

    const dispatch = useDispatch()

    const [subscribe, setSubscribe] = useState(true)


    useEffect(() => {
        if ((subscribe) && (window.localStorage?.getItem('store'))) {
            const store: User = JSON.parse(window.localStorage?.getItem('store') || '')
            if (store.isUserLogged) {
                dispatch(getState(store)) //state must be equal to local storage
                dispatch(userCoursesActions(store._id || '', null, 'getUserCourses'))
            }
        }
        return () => setSubscribe(false)
    }, [])

    const Wrapper = (PassedComponent: FC) => {
        return () => (
            <>
                <Header />
                <PassedComponent />
                <Footer />
            </>
        )
    }

    return (
        <>
            <Switch>
                <Route path='/' exact render={Wrapper(Home)} />
                <Route path='/myCourses' component={Wrapper(MyCourses)} />
                <Route path='/courses' component={Wrapper(Courses)} />
                <Route path='/contact' component={Wrapper(Contact)} />
                <Route path='/admin' component={Wrapper(Admin)} />
                <Route component={ErrorComponent} />
            </Switch>
        </>
    );
}

export default Page;