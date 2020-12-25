import * as React from 'react';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addCourse } from '../../../actions/CoursesActions'
import NewCourseModal from '../modals/NewCourseModal'
import Messages from './Messages';
import '../../../style/Admin.scss'
import { Button } from 'react-bootstrap';


const Admin: FC = () => {

    const dispatch = useDispatch()

    const [isModalVisiblity, setIsModalVisiblity] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>()
    const [warning, setWarning] = useState<string>('')
    const [img, setImg] = useState<File>()
    const [subscribe, setSubscribe] = useState<boolean>(true)
    const [showLoader, setShowLoader] = useState<boolean>(false)

    const store = useSelector((store: RootState) => store.userReducer)
    //isAdmin true beucase when is false he redirect immediately, use effect corrects is isAdmin true or false
    const [isAdmin, setIsAdmin] = useState<boolean>(true)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (subscribe) {
            const localStorage = window.localStorage.getItem('store')
            if (localStorage !== null) {
                const store: User = JSON.parse(localStorage)
                setIsAdmin(store.isAdmin || false)
            }
            else {
                Promise.resolve(store).then(store => {
                    if (store.isAdmin) {
                        setIsAdmin(true)
                    }
                    else {
                        setIsAdmin(false)
                    }
                })
            }
        }
    }, [store])

    useEffect(() => {
        return () => setSubscribe(false)
    }, [])

    const showModal = (prev: boolean): void => {
        !isModalVisiblity && setShowLoader(false)
        setIsModalVisiblity(!prev)
    }

    const handleInput = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        if (e.currentTarget.name === 'name') {
            setName(e.currentTarget.value)
        }
        else if (e.currentTarget.name === 'author') {
            setAuthor(e.currentTarget.value)
        }
        else if (e.currentTarget.name === 'description') {
            setDescription(e.currentTarget.value)
        }
        else if (e.currentTarget.name === 'price') {
            setPrice(Number(e.currentTarget.value))
        }
    }

    const handleImgInput = (e: ChangeEvent<HTMLInputElement>): void => {
        e.currentTarget.files && setImg(e.currentTarget.files[0])
    }

    const addCourseToDb = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setShowLoader(true)
        if (!name.length || !description.length || !author.length) {
            setWarning('Some input is empty')
            return
        }
        if ((!price) && ((price) && (price < 0 || isNaN(price)))) {
            setWarning('Incorrect price')
            return
        }
        if (description.length > 450) {
            setWarning('Description can has 450 letters')
            return
        }
        const course = new FormData()
        img && course.append('img', img)
        course.append('name', name)
        course.append('price', String(price))
        course.append('author', author)
        course.append('description', description)
        dispatch(addCourse(course))
        setIsModalVisiblity(false)
    }

    const values = {
        name,
        author,
        description,
        price,
        warning,
        showLoader
    }

    return (
        <>
            {!isAdmin && <Redirect to='/' />}
            <div className="Admin" data-aos="fade-up">
                <h2>Admin panel:</h2>
                <div className="panel">
                    <Button variant='primary' onClick={() => showModal(false)}>Add course</Button>
                </div>
                <NewCourseModal
                    toogleModal={showModal}
                    handleInput={handleInput}
                    values={values}
                    visiblity={isModalVisiblity}
                    add={addCourseToDb}
                    handleImgInput={handleImgInput}
                />
                <h3>Messages from users:</h3>
                <Messages subscribe={subscribe}/>
            </div>
        </>
    );
}

export default Admin;