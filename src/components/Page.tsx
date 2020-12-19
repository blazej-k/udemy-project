import React, { CSSProperties, FC, useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
// import { AnimatedSwitch, spring } from 'react-router-transition';
import Home from './Page/home/Home'
import MyCourses from './Page/courses/myCourses/MyCourses'
import Courses from './Page/courses/allCourses/Courses'
import Header from './Page/header/Header'
import Admin from './Page/admin/Admin'
import { useDispatch } from 'react-redux';
import { getState } from '../actions/UserActions';
import Contact from './Page/contact/Contact';
import Footer from './Page/footer/Footer';

const Page: FC = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        const store = window.localStorage.getItem('store')
        store && dispatch(getState(JSON.parse(store)))
    }, [])

    // const mapStyles = (styles: CSSProperties) => {
    //     return {
    //       opacity: styles.opacity,
    //       transform: `scale(${styles.scale})`,
    //     };
    //   }
      
    //   // wrap the `spring` helper to use a bouncy config
    //   const bounce = (val: any) => {
    //     return spring(val, {
    //       stiffness: 330,
    //       damping: 22,
    //     });
    //   }
      
    //   // child matches will...
    //   const bounceTransition = {
    //     // start in a transparent, upscaled state
    //     atEnter: {
    //       opacity: 0,
    //       scale: 1.2,
    //     },
    //     // leave in a transparent, downscaled state
    //     atLeave: {
    //       opacity: bounce(0),
    //       scale: bounce(0.8),
    //     },
    //     // and rest at an opaque, normally-scaled state
    //     atActive: {
    //       opacity: bounce(1),
    //       scale: bounce(1),
    //     },
    //   };

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