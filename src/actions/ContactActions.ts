export const SENDMESSAGETOMODER = 'sendmessagetomoder'
export const GETMESSAGES = 'getmessages'

const {REACT_APP_MESSAGES, REACT_APP_SEND_MESSAGE_TO_MODER} = process.env

const send = (message: object): Promise<Response> => (
    fetch(`http://localhost:2000/${REACT_APP_SEND_MESSAGE_TO_MODER}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
)

const getMessagesFromDb = (): Promise<Response> => (
    fetch(`http://localhost:2000/${REACT_APP_MESSAGES}`, {
        method: 'GET'
    })
)


export const sendMessageToModer = (message: string): SendMessageToModer => {
    return {
        type: SENDMESSAGETOMODER,
        payload: send({message})
    }
}

export const getMessages = (): GetMessages => {
    return {
        type: GETMESSAGES,
        payload: getMessagesFromDb()
    }
}