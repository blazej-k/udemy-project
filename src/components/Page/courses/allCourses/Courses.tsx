import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Course from '../Course' 

const Courses: FC = () => {


    // let courses: CourseObj[] = [
    //     {
    //         name: 'sfs',
    //         author: 'gf',
    //         // rate: 3,
    //         id: 2,
    //         description: 'sdfsfferfer',
    //         price: 344343
    //     },
    //     {
    //         name: 'sfs',
    //         author: 'gf',
    //         // rate: 3,
    //         id: 3,
    //         description: 'sdfsfferfer'
    //         ,
    //         price: 344343
    //     },
    //     { 
    //         name: 'sfs',
    //         author: 'gf',
    //         // rate: 3,
    //         id: 4,
    //         description: 'sdfsfferfer',
    //         price: 344343
    //     },
    //     {
    //         name: 'sfs',
    //         author: 'gf',
    //         // rate: 4,
    //         id: 5,
    //         description: 'sdfsfferfer',
    //         price: 344343
    //     },

    //     {
    //         name: 'sfs',
    //         author: 'gf',
    //         // rate: 5,
    //         id: 6,
    //         description: 'sdfsfferfer',
    //         price: 344343
    //     },
    //     {
    //         name: 'sfs',
    //         author: 'gf',
    //         // rate: 6,
    //         id: 7,
    //         description: 'sdfsfferfer',
    //         price: 344343
    //     },
    // ]

    const userStore = useSelector((store: RootUserState ) => store.userReducer)
    const coursesStore = useSelector((store: RootCourseState) => store.coursesReducer)

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)
    useEffect(() => { 
        Promise.resolve(coursesStore).then(store => {
            if(store) store.map((course: CourseObj) => setCourses(prev => [...prev, course]))
        })
        Promise.resolve(userStore).then(store => {

            if(store.isUserLogged){
                setIsLogged(store.isUserLogged)
            }
        })
        return () => {
        } 
    }, [userStore])

    return ( 
        <div className='Courses-list'>
            {!isLogged && <h2>Sign in to buy course</h2>}
            {!coursesStore ? <p>There isn't courses to buy</p> :
            <ul>
                {courses.map(course => {
                    return <li key={course._id}><Course
                        name={course.name}
                        author={course.author}
                        description={course.description}
                        price={course.price}
                        id={course._id}
                    /></li>
                })}
            </ul>}
        </div>
    );
}

export default Courses;