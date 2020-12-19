import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../../actions/ContactActions';


const Messages: FC = () => {

    const [messages, setMessages] = useState<Message[]>([])

    const dispatch = useDispatch()
    const store = useSelector((store: RootState) => store.contactReducer)
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getMessages())
        setLoaded(true)
    }, [])

    useEffect(() => {
        if (loaded) {
            Promise.resolve(store).then(res => {
                setMessages(res)
            })
        }
    }, [loaded])


    return (
        <div className="messages">
            <ul>
                {messages.map(message => (
                    <li key={message._id}>
                        <div className="message">
                            <span>{message.date}</span>
                            <p>{message.message}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Messages;