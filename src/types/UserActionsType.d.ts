const SIGNIN = 'signin'
const SIGNOUT = 'signout'
const SIGNUP = 'signup'
const BUYCOURSE = 'buycourse'

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
 
type User = {
    login?: string,
    password?: string,
    id?: string | number,
    isAdmin?: boolean,
    isUserLogged?: boolean,
    courses?: CourseObj[]
    error?: string
    
}