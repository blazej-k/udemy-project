import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buyCourse } from '../../../actions/UserActions';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiCheck } from 'react-icons/bi';

export interface CourseProps {
    name: string,
    author: string,
    description: string,
    price?: number,
    img: string,
    imgSrc?: File,
    id: number,
    subscribe: boolean
}

const Course: FC<CourseProps> = ({ name, author, description, price = -1, img, imgSrc, id, subscribe }) => {

    const { location } = useHistory()
    const { pathname, hash } = location

    const userStore = useSelector((store: RootState) => store.userReducer)
    const dispatch = useDispatch()

    const [user, setUser] = useState<User>({})
    const [canBuy, setCanBuy] = useState<boolean>(true)


    useEffect(() => {
        if (subscribe) {
            if (userStore.user?.isUserLogged) {
                setUser(userStore.user)
                userStore.user.courses?.map(course => {
                    course._id === id && setCanBuy(false)
                    return null
                })
            }
        }
    }, [userStore, id])


    const handleBuyCourse = (): void => {
        //when this course isn't in course list of user you can buy it
        if (canBuy) {
            const course: CourseObj = {
                name,
                author,
                description,
                price,
                img: imgSrc,
                _id: id
            }
            dispatch(buyCourse(user._id, course))
            setCanBuy(false)
        }
    }
    
    return (
        <div className="Course" id={String(id)}>
            <img src={img} alt='logo of course' />
            <div className='info'>
                <h2>{name}</h2>
                <span className='author'>{author}</span>
                <p>{description}</p>
                {price > -1 && <h3>{price} $</h3>}
                {(pathname === "/courses" || hash.length > 0) && user.isUserLogged ? canBuy ?
                    <Button onClick={handleBuyCourse} variant="outline-success">I'm buying!</Button> :
                    <Button disabled variant="outline-success">Bought
                <span className='icon'><BiCheck /></span></Button> : null
                }
            </div>
            <hr />
        </div>
    );
}

export default Course;