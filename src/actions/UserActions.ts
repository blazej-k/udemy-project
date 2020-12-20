export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'
export const SIGNUP = 'signup'
export const BUYCOURSE = 'buycourse'
export const GETSTATE = 'getstate'
export const GETUSERCOURSES = 'getusercourses'

const sendData = (URL: string, data: User): Promise<Response> => (
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
)

const getCourses = (id: string): Promise<Response> => (
    fetch('http://localhost:2000/getUserCourses', {
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
        payload: sendData('http://localhost:2000/saveUser', user)
    })
}  


export const signIn = ({ login, password }: User): SignIn => {

    return{
        type: SIGNIN,
        payload: sendData('http://localhost:2000/signIn', {login, password})
    }
}

export const buyCourse = (userObj: User, course: CourseObj): BuyCourse => {

    userObj.courses?.push(course)
    
    return{
        type: BUYCOURSE, 
        payload: sendData('http://localhost:2000/buyCourse', userObj)
    }
}

export const signOut = (_id: string): SignOut => {
    
   sendData('http://localhost:2000/signOut', {_id})

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