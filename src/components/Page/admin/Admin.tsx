import * as React from 'react';
import { FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addCourse } from '../../../actions/CoursesActions'
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
    const [warning, setWarning] = useState('')

    const store = useSelector((store: RootUserState) => store.userReducer)
    //isAdmin true beucase when is false he redirect immediately, use effect corrects is isAdmin true or false
    const [isAdmin, setIsAdmin] = useState<boolean>(true)

    useEffect(() => {
        Promise.resolve(store).then(store => {
            if (store.isAdmin) {
                setIsAdmin(true)
            }
            else {
                setIsAdmin(false)
            }
        })
        return () => {
        }
    }, [store])

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
        else {
            setPrice(Number(e.currentTarget.value))
        }
    }

    const addCourseToDb = (): void => {
        if(!name.length || !description.length || !author.length){
            setWarning('Some input is empty')
            return
        }
        if(price < 0 || isNaN(price)){
            setWarning('Incorrect price')
            return
        }
        if(description.length > 50){
            setWarning('Description can has 50 letters')
            return
        }
        dispatch(addCourse({ name, author, description, price, _id: new Date().getMilliseconds() }))
    }

    const values = {
        name,
        author,
        description,
        price,
        warning
    }

    return (
        <>
            {!isAdmin && <Redirect to='/' />}
            <button onClick={() => showModal(false)}>Add course</button>
            <NewCourseModal
                toogleModal={showModal}
                handleInput={handleInput}
                values={values}
                visiblity={isModalVisiblity}
                add={addCourseToDb}
            />
        </>
    );
}

export default Admin;