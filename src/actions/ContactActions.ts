export const SENDMESSAGETOMODER = 'sendmessagetomoder'
export const GETMESSAGES = 'getmessages'

const send = (message: object): Promise<Response> => (
    fetch('http://localhost:2000/sendMessageToModer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
)

const getMessages = (): Promise<Response> => (
    fetch('http://localhost:2000/getMessagesToModer', {
        method: 'GET'
    })
)


export const sendMessageToModer = (message: string): SendMessageToModer => {
    return {
        type: SENDMESSAGETOMODER,
        payload: send({message})
    }
}

export const GetMessages = (): GetMessages => {
    return {
        type: GETMESSAGES,
        payload: getMessages()
    }
}