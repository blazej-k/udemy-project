const CONTACT_SENDREQUEST = 'contact_sendrequest'
const MESSAGESERROR = 'fetchmessageserror'
const FETCHMESSAGESSUCCES = 'fetchmessagessucces'
const MESSAGESENDED = 'messagesended'

type Contact_SendRequest = {
    type: typeof CONTACT_SENDREQUEST,
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