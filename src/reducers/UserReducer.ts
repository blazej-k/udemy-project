import { SIGNIN, SIGNOUT, SIGNUP, BUYCOURSE } from '../actions/UserActions'

export const UserReducer = async(state: User = {}, action: UserActionType) => {
    switch (action.type) {
        case SIGNUP:
            await action.payload.then(res => res.json()).then(res => state = res)
            return state

        case SIGNIN:
            state = {}
            await action.payload.then(res => res.json()).then(res => state = res)
            return state

        case SIGNOUT:
            return state = {}
        case BUYCOURSE:
            await action.payload.then(res => res.json()).then(res => state.courses = res.courses)
            return state
        default:
            return state
    }
}   