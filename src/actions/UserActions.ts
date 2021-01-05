import { Dispatch } from "react"

export const SIGNIN = 'signin'
export const SIGNOUT = 'signout'
export const SIGNUP = 'signup'
export const BUYCOURSE = 'buycourse'
export const GETSTATE = 'getstate'
export const GETUSERCOURSES = 'getusercourses'
export const USER_SENDREQUEST = 'user_sendrequest'
export const USERERROR = 'usereror'

const { REACT_APP_BUY, REACT_APP_USER_COURSES, REACT_APP_SAVE_USER, REACT_APP_SIGN_IN, REACT_APP_SIGN_OUT } = process.env


export const signUp = ({ login, password, isAdmin }: User) => async (dispatch: Dispatch<UserActionType>) => {
    dispatch({ type: USER_SENDREQUEST })

    try {
        const user = {
            login,
            password,
            isAdmin
        }

        fetch(`http://localhost:2000/user/${REACT_APP_SAVE_USER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then((res: User) => {
                if(res === null){
                    throw new Error()
                } 
                dispatch({ type: SIGNUP, payload: res })
            })
            .catch(() => dispatch({type: USERERROR, payload: 'This login or password are occupied'}))

    } catch(err) {
        dispatch({type: USERERROR, payload: err})
    }
}

// export const getUser = (user: User, errorMessage: string) => async(dispatch: Dispatch<UserActionType>) => {
//     dispatch({ type: USER_SENDREQUEST })

//     try {
//         fetch(`http://localhost:2000/user/${REACT_APP_SIGN_IN}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then(res => res.json())
//             .then((res: User) => {
//                 if(res === null){
//                     throw new Error()
//                 }
//                 dispatch({ type: SIGNIN, payload: res })
//             })
//             .catch(() => dispatch({type: USERERROR, payload: errorMessage}))

//     } catch {
//         dispatch({type: USERERROR, payload: "Upss, we can't get acces to your account. Please try later."})
//     }
// }

export const signIn = ({ login, password }: User) => async (dispatch: Dispatch<UserActionType>) => {
    dispatch({ type: USER_SENDREQUEST })

    try {
        const user = {
            login,
            password,
        }

        fetch(`http://localhost:2000/user/${REACT_APP_SIGN_IN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then((res: User) => {
                if(res === null){
                    throw new Error()
                }
                dispatch({ type: SIGNIN, payload: res })
            })
            .catch(() => dispatch({type: USERERROR, payload: 'Login or password are incorrect'}))

    } catch {
        dispatch({type: USERERROR, payload: "Upss, we can't get acces to your account. Please try later."})
    }
}

export const buyCourse = (id: string = '', course: CourseObj) => async (dispatch: Dispatch<UserActionType>) => {
    dispatch({ type: USER_SENDREQUEST })

    try {
        fetch(`http://localhost:2000/user/${REACT_APP_BUY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({course, id})
        })
            .then(res => res.json())
            .then((res: CourseObj[]) => dispatch({ type: BUYCOURSE, payload: res }))

    } catch {
        dispatch({type: USERERROR, payload: "Upss, we can't get acces to your account. Please try later."})
    }
}

export const signOut = (id: string) => async(dispatch: Dispatch<UserActionType>) => {

    dispatch({ type: USER_SENDREQUEST })

    try {
        fetch(`http://localhost:2000/user/${REACT_APP_SIGN_OUT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        dispatch({ type: SIGNOUT })

    } catch {
        dispatch({type: USERERROR, payload: "Upss, we can't get acces to your account. Please try later."})
    }
}

export const getState = (state: User): GetState => (
    {
        type: GETSTATE,
        payload: state
    }
)

export const getUserCourses = (id: string) => async(dispatch: Dispatch<UserActionType>) => {
    dispatch({ type: USER_SENDREQUEST })

    try {
        const response: CourseObj[] = await fetch(`http://localhost:2000/user/${REACT_APP_USER_COURSES}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    }).then(res => res.json())
    dispatch({type: GETUSERCOURSES, payload: response})

    } catch {
        dispatch({type: USERERROR, payload: "Upss, we can't get acces to your account. Please try later."})
    }
}