const SIGNIN = 'signin'
const SIGNOUT = 'signout'

type SignIn = {
    type: typeof SIGNIN
    payload: User
}

type SignOut = {
    type: typeof SIGNOUT
    payload: object
}

type User = {
    login?: string,
    password?: string,
    id?: string | number,
    isAdmin?: boolean,
    isUserLogged?: boolean,
    courses?: CourseObj[]
} 