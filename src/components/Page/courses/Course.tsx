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
    id: number
}

const Course: FC<CourseProps> = ({ name, author, description, price = -1, img, imgSrc, id }) => {

    const { location } = useHistory()
    const pathName = location.pathname

    const userStore = useSelector((store: RootState) => store.userReducer)
    const dispatch = useDispatch()

    const [isLogged, setIsLogged] = useState<boolean>(true)
    const [user, setUser] = useState<User>({})
    const [canBuy, setCanBuy] = useState<boolean>(true)


    useEffect(() => {
        const localStorage = window.localStorage.getItem('store')
        if (localStorage !== null) {
            const userStore: User = JSON.parse(localStorage)
            setIsLogged(userStore.isUserLogged || false)
            // userStore.courses?.map(course => {
            //     course._id === id && setCanBuy(false)
            //     return null
            // })
        }
        Promise.resolve(userStore).then(userStore => {
            if (userStore.isUserLogged) {
                setIsLogged(userStore.isUserLogged)
                setUser(userStore)
                userStore.courses?.map(course => {
                    course._id === id && setCanBuy(false)
                    return null
                })
            }
            else {
                setIsLogged(false)
            }
        })
        return () => {
        setIsLogged(false)
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
        dispatch(buyCourse(user, course))
        setCanBuy(false)
    }
}

return (
    <div className="Course">
        <img src={img} style={{'width': '10%'}} alt='logo of course' />
        <div className='info'>
            <h2>{name}</h2>
            <span>{author}</span>
            <p>{description}</p>
            {price > -1 && <h3>{price} $</h3>}

        </div>
        {pathName === "/courses" && isLogged ? canBuy ?
            <Button className="mt-3" onClick={handleBuyCourse} variant="outline-success">I'm buying!</Button> :
            <Button className="mt-3" disabled variant="outline-success">Bought
                <span className='icon'><BiCheck /></span></Button> : null
        }
        <hr />
    </div>
);
}

export default Course;