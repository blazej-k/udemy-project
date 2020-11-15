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

export const signIn = ({ login, password }: Payload): SignIn => (
    {
        type: SIGNIN,
        payload: {
            login,
            password
        }
    }
)

export const signOut  = (): SignOut => (
    {
        type: SIGNOUT,
        payload: {}
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