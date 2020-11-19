export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'
export const SIGNUP = 'signup'

export const signIn = ({ login, password }: User): SignIn => (
    {
        type: SIGNIN,
        payload: {
            login,
            password,
        }
    }
)

export const signUp = ({ login, password, isAdmin }: User): SignUp => (
    {
        type: SIGNUP, 
        payload: {
            login,
            password,
            isAdmin
        }
    }
)

export const signOut = ({}: object): SignOut => (
    {
        type: SIGNOUT,
        payload: {}
    }
)
