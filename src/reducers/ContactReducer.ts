import { SENDMESSAGETOMODER, GETMESSAGES } from '../actions/ContactActions'

export const ContactReducer = async (state: Message[] = [], action: ContactReducerType) => {
    switch (action.type) {
        case SENDMESSAGETOMODER:
            await action.payload
                .then(res => res.json())
                .then(res => state.push(res))
            return state
        case GETMESSAGES:
            await action.payload
                .then(res => res.json())
                .then(res => state = res)
            return state
        default:
            return state
    }
}