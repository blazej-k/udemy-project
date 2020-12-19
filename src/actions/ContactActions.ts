export const SENDMESSAGETOMODER = 'sendmessagetomoder'
export const GETMESSAGES = 'getmessages'

const send = (message: string): Promise<Response> => (
    fetch('localhost:2000/sendMessageToModer', {
        method: 'POST',
        body: message
    })
)

const getMessages = (): Promise<Response> => (
    fetch('localhost:2000/getMessagesToModer', {
        method: 'GET'
    })
)


export const sendMessageToModer = (message: string): SendMessageToModer => {
    return {
        type: SENDMESSAGETOMODER,
        payload: send(message)
    }
}

export const GetMessages = (): GetMessages => {
    return {
        type: GETMESSAGES,
        payload: getMessages()
    }
}