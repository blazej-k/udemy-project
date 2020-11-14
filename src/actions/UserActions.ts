export const createUser = ({ login, password, id, isAdmin = false }: Payload): CreateUser => (
    {
        type: CREATEUSER,
        payload: {
            login,
            password,
            id,
            isAdmin
        }
    }
)

export const signIn = ({ login, password }: Payload): SignIn => (
    {
        type: SIGNIN,
        payload: {
            login,
            password
        }
    }
)

export const signOut  = ({ login, password }: Payload): SignOut => (
    {
        type: SIGNOUT,
        payload: {
            login,
            password
        }
    }
)

export const deleteUser  = ({ id }: Payload): DeleteUser => (
    {
        type: DELETEUSER,
        payload: {
            id
        }
    }
)