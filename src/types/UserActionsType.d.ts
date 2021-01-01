const USER_SENDREQUEST = 'user_sendrequest'
const SIGNIN = 'signin'
const SIGNOUT = 'signout'
const SIGNUP = 'signup'
const BUYCOURSE = 'buycourse'
const GETSTATE = 'getstate'
const GETUSERCOURSES = 'getusercourses'
const USERERROR = 'usereror'

type User_SendRequest = {
    type: typeof USER_SENDREQUEST
}

type UserError = {
    type: typeof USERERROR
    payload: string
}

type SignIn = {
    type: typeof SIGNIN
    payload: User
}

type SignOut = {
    type: typeof SIGNOUT
}

type SignUp = {
    type: typeof SIGNUP
    payload: User
}


type BuyCourse = {
    type: typeof BUYCOURSE
    payload: CourseObj[]
}

type GetState = {
    type: typeof GETSTATE
    payload: User
}

type GetUserCourses = {
    type: typeof GETUSERCOURSES
    payload: CourseObj[]
}

type User = {
    login?: string,
    password?: string,
    _id?: string,
    isAdmin?: boolean,
    isUserLogged?: boolean,
    courses?: CourseObj[]
}
