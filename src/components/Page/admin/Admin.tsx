import * as React from 'react';
import { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {addCourse} from '../../../actions/CoursesActions'
import NewCourseModal from '../modals/NewCourseModal'

export interface AdminProps {
    
}
 
const Admin: FC = () => {

    const dispatch = useDispatch()

    const [isModalVisiblity, setisModalVisiblity] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(0)

    const showModal = (prev: boolean): void => {
        setisModalVisiblity(!prev)
    }

    const handleInput = (e: FormEvent<HTMLInputElement>): void => {
        if (e.currentTarget.name === 'name') {
            setName(e.currentTarget.value)
        }
        else if (e.currentTarget.name === 'author') {
            setAuthor(e.currentTarget.value)
        }
        else if (e.currentTarget.name === 'description') {
            setDescription(e.currentTarget.value) 
        }
        else{
            setPrice(Number(e.currentTarget.value))
        }
    }
    const addCourseToDb = (): void => {
        dispatch(addCourse({name, author, description, price, _id: new Date().getMilliseconds()}))
    }

    const values = {
        name,
        author,
        description,
        price
    }

    return (
        <>
        <button onClick={() => showModal(false)}>Add course</button>
        <NewCourseModal toogleModal={showModal} handleInput={handleInput} values={values} visiblity={isModalVisiblity} add={addCourseToDb}/>
        </>
    );
}
 
export default Admin;