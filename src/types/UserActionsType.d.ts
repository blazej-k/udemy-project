const SIGNIN = 'signin'
const SIGNOUT = 'signout'
const SIGNUP = 'signup'
const BUYCOURSE = 'buycourse'
const GETSTATE = 'getstate'
const GETUSERCOURSES = 'getusercourses'

type SignIn = {
    type: typeof SIGNIN
    payload: Promise<Response>
}

type SignOut = {
    type: typeof SIGNOUT
    payload: User
}

type SignUp = {
    type: typeof SIGNUP
    payload: Promise<Response>
}


type BuyCourse = {
    type: typeof BUYCOURSE
    payload: Promise<Response>
}

type GetState = {
    type: typeof GETSTATE
    payload: User
}

type GetUserCourses = {
    type: typeof GETUSERCOURSES
    payload: Promise<Response>
}
 
type User = {
    login?: string,
    password?: string,
    _id?: string,
    isAdmin?: boolean,
    isUserLogged?: boolean,
    courses?: CourseObj[]
    error?: string
    
}