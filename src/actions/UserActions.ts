// export const createUser = ({ login, password, id, isAdmin = false }: Payload): CreateUser => (
//     {
//         type: CREATEUSER,
//         payload: {
//             login,
//             password,
//             id,
//             isAdmin
//         }
//     }
// )
export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'

export const signIn = ({ login, password, isUserLogged }: Payload): SignIn => (
    {
        type: SIGNIN,
        payload: {
            login,
            password,
        }
    }
)

export const signOut  = ({id}: Payload): SignOut => (
    {
        type: SIGNOUT,
        payload: {
            id
        }
    }
)

// export const deleteUser  = ({ id, isAdmin }: Payload): DeleteUser => (
//     {
//         type: DELETEUSER,
//         payload: {
//             id,
//             isAdmin
//         }
//     }
// )