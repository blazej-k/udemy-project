export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'
export const SIGNUP = 'signup'
export const BUYCOURSE = 'buycourse'

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

export const buyCourse = ({ name, author, description, price, id }: CourseObj): BuyCourse => (
    {
        type: BUYCOURSE, 
        payload: {
            name,
            author,
            description,
            price,
            id
        }
    }
)

export const signOut = ({}: User): SignOut => (
    {
        type: SIGNOUT,
        payload: {}
    }
)
