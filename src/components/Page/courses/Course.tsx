import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { buyCourse } from '../../../actions/UserActions'
export interface CourseProps {
    name: string,
    author: string,
    description: string,
    price?: number,
    id: number
}

const Course: FC<CourseProps> = ({ name, author, description, price = -1, id }) => {

    const { location } = useHistory()
    const pathName = location.pathname

    const store = useSelector((store: RootUserState) => store.userReducer)
    const dispatch = useDispatch()

    const [isLogged, setIsLogged] = useState<boolean>(true)
    const [user, setUser] = useState<User>({})
    const [courseId, setCourseId] = useState<number>()
    const [courses, setCourses] = useState<CourseObj[] | undefined>([])


    useEffect(() => {
        setCourseId(id)
        const localStorage = window.localStorage.getItem('store')
        if (localStorage !== null) {
            const store: User = JSON.parse(localStorage)
            setCourses(store.courses || [])
            setUser(store)
            setIsLogged(store.isUserLogged || false)
        }
        else {
            Promise.resolve(store).then(store => {
                if (store.isUserLogged) {
                    setIsLogged(store.isUserLogged)
                    setUser(store)
                    setCourses(store.courses)
                }
                else {
                    setIsLogged(false)
                }
            })
        }
        return () => {
            setIsLogged(false)
        }
    }, [store, id])

    const handleBuyCourse = (): void => {
        //when this course isn't in course list of user you can buy it
        let canBuy = true

        courses?.map(course => (
            course._id === courseId ? canBuy = false : null
        ))
        if (!canBuy) return
        const course: CourseObj = {
            name,
            author,
            description,
            price,
            _id: id
        }
        
        dispatch(buyCourse(user, course))
    }

    console.log(name)

    return (
        <div className="Course">
            <h2>{name}</h2>
            <span>{author}</span>
            <p>To bd zdj</p>
            <p>{description}</p>
            {price > -1 && <h1>{price}</h1>}
            {pathName === "/courses" && isLogged && <button onClick={handleBuyCourse}>Buy</button>}
        </div>
    );
}

export default Course;