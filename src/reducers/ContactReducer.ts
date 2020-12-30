import { FETCHMESSAGESREQUEST, MESSAGESERROR, FETCHMESSAGESSUCCES } from '../actions/ContactActions'

const initState: ContactReducer = {
    state: [],
    loading: false,
    error: ''
}

export const ContactReducer = (state = initState, action: ContactReducerType) => {
    switch (action.type) {
        case FETCHMESSAGESREQUEST:
            return state = {...state, loading: true}
        case MESSAGESERROR: 
            return state = {...state, loading: false, error: action.payload} 
        case FETCHMESSAGESSUCCES: 
            return state = {loading: false, error: '', state: action.payload} 
        default:
            return state
    }
} 