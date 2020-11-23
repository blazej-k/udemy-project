export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'
export const SIGNUP = 'signup'
export const BUYCOURSE = 'buycourse'

const saveUser = (user: User): Promise<Response> => (
    fetch('http://localhost:2000/saveUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
)

export const signUp = ({ login, password, isAdmin }: User): SignUp => {
    const user: User = {
        login,
        password,
        isAdmin
    }

    return({
        type: SIGNUP,
        payload: saveUser(user)
    })
}  


export const signIn = ({ login, password }: User): SignIn => (
    {
        type: SIGNIN,
        payload: {
            login,
            password,
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
