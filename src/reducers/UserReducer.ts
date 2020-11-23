import { SIGNIN, SIGNOUT, SIGNUP, BUYCOURSE } from '../actions/UserActions'

let exampleDB: User[] = [
    {
        login: 'b',
        password: '1234',
        id: 23443423,
        isAdmin: false,
        isUserLogged: false,
        courses: []
    },
    {
        login: 'k',
        password: '12345',
        id: 223443423,
        isAdmin: false,
        isUserLogged: false,
        courses: []
    },
    {
        login: 'l',
        password: '123456',
        id: 23443423,
        isAdmin: false,
        isUserLogged: false,
        courses: []
    },
]

export const UserReducer = async(state: User = {}, action: ActionType) => {
    switch (action.type) {
        case SIGNUP:
            await action.payload.then(res => res.json()).then(res => state = res)
            return state

        case SIGNIN:
            state = {}
            exampleDB.map((user: User) => {
                if ((user.login === action.payload.login) && (user.password === action.payload.password)) {
                    user.isUserLogged = true
                    return state = user
                }
                return null
            })

            if (!state.login) {
                state = { error: `Incorrect login or password` }
            }
            return state

        case SIGNOUT:
            return state = {}
        case BUYCOURSE:
            let newState = state
            state.courses?.push(action.payload)
            return state = newState
        default:
            return state
    }
}   