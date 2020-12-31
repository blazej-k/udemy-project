import { Dispatch } from "react"

export const SENDREQUEST = 'sendrequest'
export const MESSAGESERROR = 'fetchmessageserror'
export const FETCHMESSAGESSUCCES = 'fetchmessagessucces'
export const MESSAGESENDED = 'messagesended'

const {REACT_APP_MESSAGES, REACT_APP_MESSAGE_TO_MODER} = process.env

export const getMessages = () => async(dispatch: Dispatch<ContactReducerType>) => {
    dispatch({type: SENDREQUEST})
    try {
        const response: Message[] = await fetch(`http://localhost:2000/contact/${REACT_APP_MESSAGES}`).then(res => res.json())
        dispatch({type: FETCHMESSAGESSUCCES, payload: response})
    } catch {
        dispatch({type: MESSAGESERROR, payload: "Upss, something go wrong and we can't get messages! Please go back \n"+
        "some time later!"})
    }
}

export const sendMessage = (message: string) => async(dispatch: Dispatch<ContactReducerType>) => {
    dispatch({type: SENDREQUEST})
    try {
        await fetch(`http://localhost:2000/contact/${REACT_APP_MESSAGE_TO_MODER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
        }).then(() => dispatch({type: MESSAGESENDED}))
    } catch {
        dispatch({type: MESSAGESERROR, payload: "Upss, something go wrong and we can't send message! Please go back \n"+
        "some time later!"})
    }
}