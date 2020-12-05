import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { buyCourse } from '../../../actions/UserActions'

export interface CourseProps {
    name: string,
    author: string,
    description: string,
    price?: number,
    img: string,
    id: number
}

const Course: FC<CourseProps> = ({ name, author, description, price = -1, img, id }) => {

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
            setUser(userStore)
            setIsLogged(userStore.isUserLogged || false)
            userStore.courses?.map(course => {
                course._id === id && setCanBuy(false)
                return null
            })
        }
        else {
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
        }
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
                _id: id
            }
            dispatch(buyCourse(user, course)) 
            setCanBuy(false) 
        }
    } 
 
    return ( 
        <div className="Course">
            <h2>{name}</h2>
            <span>{author}</span>
            {/* {img && <img src={img}/>} */}
            <p>{description}</p>
            {price > -1 && <h3>Price: {price} $</h3>}
            {pathName === "/courses" && isLogged ? canBuy ? <button onClick={handleBuyCourse}>Buy</button> : <p>Bought</p> : null}
        </div>
    );
}

export default Course;