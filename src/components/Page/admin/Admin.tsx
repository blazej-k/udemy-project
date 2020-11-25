import * as React from 'react';
import { FC, FormEvent, useState } from 'react';
import NewCourseModal from '../modals/NewCourseModal'

export interface AdminProps {
    
}
 
const Admin: FC = () => {

    const [isModalVisiblity, setisModalVisiblity] = useState<boolean>(false)
    const [name, setName] = useState('')

    const showModal = (prev: boolean): void => {
        setisModalVisiblity(!prev)
    }

    const handleInput = (e: FormEvent<HTMLInputElement>): void => {
        if (e.currentTarget.name === 'name') {
            setName(e.currentTarget.value)
        }
    }

    return (
        <>
        <button onClick={() => showModal(false)}>Add course</button>
        <NewCourseModal toogleModal={showModal} handleInput={handleInput} name={name} visiblity={isModalVisiblity}/>
        </>
    );
}
 
export default Admin;