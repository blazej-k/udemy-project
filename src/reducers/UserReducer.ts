export const UserReducer = (state: Payload = {}, action: ActionType) => {
    switch(action.type){
        case SIGNIN || SIGNOUT:
            return state = action.payload
        // case DELETEUSER:
        //     const {id} = action.payload
        //     state.filter(user => user.id !== id)

    }
}  