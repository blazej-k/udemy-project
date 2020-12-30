import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../../actions/ContactActions';

interface MessagesProps{
    subscribe: boolean
}

const Messages: FC<MessagesProps> = ({subscribe}) => {

    const [messages, setMessages] = useState<Message[]>([])

    const dispatch = useDispatch()
    const store = useSelector((store: RootState) => store.contactReducer)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        if(subscribe){
            dispatch(getMessages())
        }
    }, [])

    useEffect(() => {
        const {state, loading, error} = store
        setMessages(state)
        setLoading(loading)
        setError(error)
    }, [store])


    return (
        <div className="messages">
            {error.length > 0 ? <h3>{error}</h3> : loading ? <p>Loading...</p> :
            <ul data-aos="fade-up">
                {messages.map(message => (
                    <li key={message._id}>
                        <div className="message">
                            <span>{message.date}</span>
                            <p>{message.message}</p>
                        </div>
                    </li>
                ))}
            </ul>}
        </div>
    );
}

export default Messages;