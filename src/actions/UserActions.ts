export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'
export const SIGNUP = 'signup'
export const BUYCOURSE = 'buycourse'
export const GETSTATE = 'getstate'
export const GETUSERCOURSES = 'getusercourses'

const {REACT_APP_BUY, REACT_APP_USER_COURSES, REACT_APP_SAVE_USER, REACT_APP_SIGN_IN, REACT_APP_SIGN_OUT} = process.env

const sendData = (URL: string, data: User): Promise<Response> => (
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
)

const buy = (id: string, course: CourseObj): Promise<Response> => (
    fetch(`http://localhost:2000/user/${REACT_APP_BUY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, course})
    })
)

const getCourses = (id: string): Promise<Response> => (
    fetch(`http://localhost:2000/user/${REACT_APP_USER_COURSES}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
)


export const signUp = ({ login, password, isAdmin }: User): SignUp => {
    const user: User = {
        login,
        password,
        isAdmin
    }

    return({
        type: SIGNUP,
        payload: sendData(`http://localhost:2000/user/${REACT_APP_SAVE_USER}`, user)
    })
}  


export const signIn = ({ login, password }: User): SignIn => {

    return{
        type: SIGNIN,
        payload: sendData(`http://localhost:2000/user/${REACT_APP_SIGN_IN}`, {login, password})
    }
}

export const buyCourse = (id: string = '', course: CourseObj): BuyCourse => {

    return{
        type: BUYCOURSE, 
        payload: buy(id, course)
    }
}

export const signOut = (_id: string): SignOut => {
    
   sendData(`http://localhost:2000/user/${REACT_APP_SIGN_OUT}`, {_id})

    return {
        type: SIGNOUT,
        payload: {}
    }
}

export const getState = (state: User): GetState => (
    {
        type: GETSTATE,
        payload: state
    }
)

export const getUserCourses = (id: string): GetUserCourses => (
    {
        type: GETUSERCOURSES,
        payload: getCourses(id) 
    }
)