import { SENDMESSAGETOMODER, GETMESSAGES } from '../actions/ContactActions'

export const ContactReducer = async (state: Message[] = [], action: ContactReducerType) => {
    switch (action.type) {
        case SENDMESSAGETOMODER:
            let newState: Message[] = []
            await Promise.resolve(state)
                .then(res => newState = res)
            await Promise.resolve(action.payload)
                .then(res => res.json())
                .then(res => {
                newState.push(res)
            })
            return state = newState
        case GETMESSAGES:
            await action.payload
                .then(res => res.json())
                .then(res => state = res)
            return state
        default:
            return state
    }
} 