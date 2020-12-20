import React, { useState, FC, useLayoutEffect, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Course from '../Course'


const MyCourses: FC = () => {

    const store = useSelector((store: RootState) => store.userReducer)

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>()

    useLayoutEffect(() => {
        const localStorage = window.localStorage.getItem('store')
        if (localStorage !== null) {
            const store: User = JSON.parse(localStorage)
            setIsLogged(store.isUserLogged || false)
        }

        Promise.resolve(store).then(store => {
            if ((store.courses) && (store.isUserLogged)) {
                isLogged !== true && setIsLogged(store.isUserLogged)
                setCourses(store.courses)
            }
        })
        return () => {
            setCourses([])
            setIsLogged(false)
    }}, [store])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

const coursesElement =
    <ul>
        {courses.map(course => {
            return course._id && <li key={course._id}><Course
                name={course.name}
                author={course.author}
                description={course.description}
                img={course.imgStringsTab || ''}
                id={course._id}
            /></li>
        })}
    </ul >
return (
    <div className="MyCourses-list" data-aos="fade-up">
        {isLogged ? courses.length ? coursesElement : <h1>Buy some courses and go learn!</h1> :
            <h1>Sign in to see your bought courses</h1>}
    </div>
);
}

export default MyCourses;