import React, { FC, FunctionComponent, useEffect, useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
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

    const NewHOC = (PassedComponent: FC) => {
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
                <Route path='/' exact render={NewHOC(Home)} />
                <Route path='/myCourses' component={NewHOC(MyCourses)} />
                <Route path='/courses' component={NewHOC(Courses)} />
                <Route path='/contact' component={NewHOC(Contact)} />
                <Route path='/admin' component={NewHOC(Admin)} />
                <Route component={ErrorComponent} />
                {/* <Redirect to='/404'/> */}
            </Switch>
        </>
    );
}

export default Page;