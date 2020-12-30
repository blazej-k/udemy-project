import { Dispatch } from "react"

export const FETCHMESSAGESREQUEST = 'fetchmessagesrequest'
export const MESSAGESERROR = 'fetchmessageserror'
export const FETCHMESSAGESSUCCES = 'fetchmessagessucces'

const {REACT_APP_MESSAGES, REACT_APP_MESSAGE_TO_MODER} = process.env

export const getMessages = () => async(dispatch: Dispatch<ContactReducerType>) => {
    dispatch({type: FETCHMESSAGESREQUEST})
    try {
        const response: Message[] = await fetch(`http://localhost:2000/contact/${REACT_APP_MESSAGES}`).then(res => res.json())
        dispatch({type: FETCHMESSAGESSUCCES, payload: response})
    } catch (error) {
        dispatch({type: MESSAGESERROR, payload: "Upss, something go wrong and we can't do this operation! Please go back \n"+
        "some tome leater!"})
    }
}