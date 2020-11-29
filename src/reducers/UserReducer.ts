import { SIGNIN, SIGNOUT, SIGNUP, BUYCOURSE, GETSTATE } from '../actions/UserActions'

export const UserReducer = async (state: User = {}, action: UserActionType) => {
    const { localStorage } = window
    switch (action.type) {
        case SIGNIN:
            await action.payload
                .then(res => res.json())
                .then((res: User) => state = res)
                .then(res => {
                    if (!res.error) localStorage.setItem('store', JSON.stringify(res))
                })
            return state

        case SIGNUP:
                await action.payload
                    .then(res => res.json())
                    .then((res: User) => state = res)
                    .then(res => {
                        if (!res.error) localStorage.setItem('store', JSON.stringify(res))
                    })
                return state

        case SIGNOUT:
            state.isUserLogged = false
            localStorage.removeItem('store')
            return state = {}

        case BUYCOURSE:
            await action.payload
                .then(res => res.json())
                .then((res: User) => state = res)
                .then(res => localStorage.setItem('store', JSON.stringify(res)))
            return state
        
        case GETSTATE:
            return state = action.payload
        default:
            return state
    }
}   