import { SENDREQUEST, MESSAGESERROR, FETCHMESSAGESSUCCES, MESSAGESENDED } from '../actions/ContactActions'

const initState: ContactReducer = {
    state: [],
    loading: false,
    error: ''
}

export const ContactReducer = (state = initState, action: ContactReducerType) => {
    switch (action.type) {
        case SENDREQUEST:
            return state = {...state, loading: true, error: ''}
        case MESSAGESERROR: 
            return state = {...state, loading: false, error: action.payload} 
        case FETCHMESSAGESSUCCES: 
            return state = {state: action.payload, loading: false, error: ''} 
        case MESSAGESENDED:
            return state = {...state, loading: false, error: ''}
        default:
            return state
    }
} 