const SENDMESSAGETOMODER = 'sendmessagetomoder'
const GETMESSAGES = 'getmessages'

type SendMessageToModer = {
    type: typeof SENDMESSAGETOMODER,
    payload: Promise<Response>
}

type GetMessages = {
    type: typeof GETMESSAGES,
    payload: Promise<Response>
}

type Message = {
    message: string
    date: string
}