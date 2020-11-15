// const CREATEUSER = 'createuser'
// const DELETEUSER = 'deleteuser'
const SIGNIN = 'signin'
const SIGNOUT = 'signout'

// type CreateUser = {
//     type: typeof CREATEUSER
//     payload: Payload
// }

// type DeleteUser = {
//     type: typeof DELETEUSER
//     payload: Payload
// }

type SignIn = {
    type: typeof SIGNIN
    payload: Payload
}

type SignOut = {
    type: typeof SIGNOUT
    payload: Payload
}

type Payload = {
    login?: string,
    password?: string,
    id?: string | number,
    isAdmin?: boolean,
    isUserLogged?: boolean
} 