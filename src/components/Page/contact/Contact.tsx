import React, { FC, FormEvent, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
// import { sendMessageToModer } from '../../../actions/ContactActions';
import '../../../style/Contact.scss'


const Contact: FC = () => {


    const [message, setMessage] = useState<string>(''),
        [warning, setWarning] = useState<string>('')
 
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handleTextarea = (e: FormEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const validateForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(message.length > 29){
            // dispatch(sendMessageToModer(message))
            setMessage('')
            setWarning('')
        }
        else{
            setWarning('Message must have 30 characters')
        }
    }

    return (
        <div className="Contact" data-aos="fade-up">
            <div className="introdution">
                <h2>Write to us if you have a problem</h2>
                <p>If there's some problem, question or something else you can write to our moderation. We write back as
                fast as is possible. We ensure anonymity but you have to follow the rules:</p>
                <ul>
                    <li>Don't be vulgar,</li>
                    <li>Use understood language,</li>
                    <li>Don't write without any problem or question,</li>
                    <li>Be patient,</li>
                    <li>Present your problem.</li>
                </ul>
                <p>We'll very satisfied when you follow that rules and you'll nice client. Be smile, you're not alone here :).</p>
            </div>
            <div className="form">
                Length: {message.length}<br/>
                <form onSubmit={validateForm}>
                    <textarea rows={10} value={message} placeholder="I've problem with..." onChange={handleTextarea}></textarea>
                    <Button variant='success' type='submit'>Send</Button>
                </form>
                {warning}
            </div>
        </div>
    );
}

export default Contact;