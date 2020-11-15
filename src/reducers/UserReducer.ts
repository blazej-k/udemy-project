import { SIGNIN, SIGNOUT } from '../actions/UserActions'

const exampleDB: Payload[] = [
    {
        login: 'b',
        password: '1234',
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
                id: 292
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
                id: 292
            }
        ]
    },
]

export const UserReducer = (state: Payload | null = {}, action: ActionType) => {
    switch (action.type) {
        case SIGNIN:
            const {login, password} = action.payload
            exampleDB.map((user: Payload) => {
                if((user.login === login) && (user.password === password)){
                    user.isUserLogged = true
                    return state = user
                }
            })
            return state
        default:
            return state
        // case DELETEUSER:
        //     const {id} = action.payload
        //     state.filter(user => user.id !== id)

    }
}  