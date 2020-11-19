import { SIGNIN, SIGNOUT, SIGNUP } from '../actions/UserActions'
import { store } from './store'

let exampleDB: User[] = [
    {
        login: 'bbbbbb',
        password: '1234',
        id: 23443423,
        isAdmin: false,
        isUserLogged: false,
        courses: [
            // {
            //     name: 'js',
            //     author: 'b',
            //     price: 42,
            //     description: 'fdsgfdgd dgdfg',
            //     id: 22
            // },
            // {
            //     name: 'html',
            //     author: 'b',
            //     price: 42,
            //     description: 'fdsgfdgd dgdfg',
            //     id: 292
            // },
            // {
            //     name: 'css',
            //     author: 'b',
            //     price: 42,
            //     description: 'fdsgfdgd dgdfg',
            //     id: 232
            // }
        ]
    },
    {
        login: 'k',
        password: '12345',
        id: 223443423,
        isAdmin: false,
        isUserLogged: false,
        courses: [
            {
                name: 'js',
                author: 'b',
                price: 42,
                description: 'fdsgfdgd dgdfg',
                id: 22
            },
            {
                name: 'css',
                author: 'b',
                price: 42,
                description: 'fdsgfdgd dgdfg',
                id: 232
            }
        ]
    },
    {
        login: 'l',
        password: '123456',
        id: 23443423,
        isAdmin: false,
        isUserLogged: false,
        courses: [
            {
                name: 'js',
                author: 'b',
                price: 42,
                description: 'fdsgfdgd dgdfg',
                id: 22
            },
            {
                name: 'html',
                author: 'b',
                price: 42,
                description: 'fdsgfdgd dgdfg',
                id: 2000
            }
        ]
    },
]

export const UserReducer = (state: User | InvalidFormValidate = {}, action: ActionType) => {
    switch (action.type) {
        case SIGNUP:
            let {login, password} = action.payload
            state = {}
            const error: InvalidFormValidate = {error: `Login is occupied(${login}), set another`}
            exampleDB.map((user: User) => {
                if(user.login === login){
                    return state = error
                }
                return null
            })

            if(state === error){  
                return state
            }

            const user: User = {
                ...action.payload,
                id: new Date().getMilliseconds(),
                isUserLogged: true, 
                courses: []
            }

            exampleDB = [...exampleDB, user]
            return state = user

        case SIGNIN:
            state = {}
            exampleDB.map((user: User) => {
                if((user.login === login) && (user.password === password)){
                    user.isUserLogged = true
                    return state = user
                }
                return null
            })

            if(!state.login){
                state = {error: `Incorrect login or password`}
            }
            return state

        case SIGNOUT:
            return state = {}
        default:
            return state
    }
}   