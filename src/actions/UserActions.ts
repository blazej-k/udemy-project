export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'
export const SIGNUP = 'signup'
export const BUYCOURSE = 'buycourse'
export const GETSTATE = 'getstate'

const sendData = (URL: string, body: User): Promise<Response> => (
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
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

export const buyCourse = (userObj: User, courses: CourseObj): BuyCourse => {

    userObj.courses?.push(courses)

    return{
        type: BUYCOURSE, 
        payload: sendData('http://localhost:2000/buyCourse', userObj)
    }
}

export const signOut = ({}: User): SignOut => (
    {
        type: SIGNOUT,
        payload: {}
    }
)

export const getState = (state: User): GetState => (
    {
        type: GETSTATE,
        payload: state
    }
)