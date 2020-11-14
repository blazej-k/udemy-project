import React from 'react' 
import { Route, Switch, Redirect } from 'react-router';
import Home from './Page/Home'

const MainComponent = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/myCourses' component={() => <p>moje kursy</p>} />
            <Route path='/courses' component={() => <p>kursy</p>} />
            <Route path='/myCourses' component={() => <p>moje kursy</p>} />
            <Redirect to='/404'/>
        </Switch>
    );
}
 
export default MainComponent;