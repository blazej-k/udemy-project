const FETCHMESSAGESREQUEST = 'fetchmessagesrequest'
const MESSAGESERROR = 'fetchmessageserror'
const FETCHMESSAGESSUCCES = 'fetchmessagessucces'

type FetchMessagesRequest = {
    type: typeof FETCHMESSAGESREQUEST,
}

type FetchMessagesSuccess = {
    type: typeof FETCHMESSAGESSUCCES,
    payload: Message[]
}

type MessagesError = {
    type: typeof MESSAGESERROR
    payload: string
}

type Message = {
    message: string
    date: string
    _id?: string
}

type ContactReducer = {
    state: Message[],
    loading: boolean,
    error: string
}