const SENDREQUEST = 'sendrequest'
const MESSAGESERROR = 'fetchmessageserror'
const FETCHMESSAGESSUCCES = 'fetchmessagessucces'
const MESSAGESENDED = 'messagesended'

type SendRequest = {
    type: typeof SENDREQUEST,
}

type FetchMessagesSuccess = {
    type: typeof FETCHMESSAGESSUCCES,
    payload: Message[]
}

type MessagesError = {
    type: typeof MESSAGESERROR
    payload: string
}
type MessageSended = {
    type: typeof MESSAGESENDED
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