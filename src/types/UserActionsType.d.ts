const SIGNIN = 'signin'
const SIGNOUT = 'signout'
const SIGNUP = 'signup'

type SignIn = {
    type: typeof SIGNIN
    payload: User
}

type SignOut = {
    type: typeof SIGNOUT
    payload: User
}

type SignUp = {
    type: typeof SIGNUP
    payload: User
}
 
type User = {
    login?: string,
    password?: string,
    id?: string | number,
    isAdmin?: boolean,
    isUserLogged?: boolean,
    courses?: CourseObj[]
}

type InvalidFormValidate = {
    error: string
}