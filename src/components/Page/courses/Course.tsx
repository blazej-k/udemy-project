import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {buyCourse} from '../../../actions/UserActions'
export interface CourseProps {
    name: string,
    author: string,
    img?: unknown,
    description: string,
    price?: number
}

const Course: FC<CourseProps> = ({ name, author, description, price = -1 }) => {

    const { location } = useHistory()
    const pathName = location.pathname

    const { isUserLogged } = useSelector((store: RootUserState) => store.userReducer)
    const dispatch = useDispatch()

    const handleBuyCourse = (): void => {
        dispatch(buyCourse({name, author, description, price, id: new Date().getMilliseconds()}))
    }

    return (
        <div className="Course">
            <h2>{name}</h2>
            <span>{author}</span>
            <p>To bd zdj</p>
            <p>{description}</p>
            {price > -1 && <h1>{price}</h1>}
            {pathName === "/courses" && isUserLogged && <button onClick={handleBuyCourse}>Buy</button>}
        </div>
    );
}

export default Course;