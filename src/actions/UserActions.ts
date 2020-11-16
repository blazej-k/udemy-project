export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'

export const signIn = ({ login, password }: User): SignIn => (
    {
        type: SIGNIN,
        payload: {
            login,
            password,
        }
    }
)

export const signOut = ({}: object): SignOut => (
    {
        type: SIGNOUT,
        payload: {}
    }
)
