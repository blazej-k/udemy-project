import {SIGNIN, SIGNOUT} from '../actions/UserActions'

export const UserReducer = (state: Payload = {}, action: ActionType) => {
    switch(action.type){
        case SIGNIN || SIGNOUT:
            return state = action.payload
        default:
            return state
        // case DELETEUSER:
        //     const {id} = action.payload
        //     state.filter(user => user.id !== id)

    }
}  