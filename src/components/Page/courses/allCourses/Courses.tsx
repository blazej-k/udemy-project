import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Course from '../Course' 

const Courses: FC = () => {


    let courses: CourseObj[] = [
        {
            name: 'sfs',
            author: 'gf',
            // rate: 3,
            id: 2,
            description: 'sdfsfferfer',
            price: 344343
        },
        {
            name: 'sfs',
            author: 'gf',
            // rate: 3,
            id: 3,
            description: 'sdfsfferfer'
            ,
            price: 344343
        },
        { 
            name: 'sfs',
            author: 'gf',
            // rate: 3,
            id: 4,
            description: 'sdfsfferfer',
            price: 344343
        },
        {
            name: 'sfs',
            author: 'gf',
            // rate: 4,
            id: 5,
            description: 'sdfsfferfer',
            price: 344343
        },

        {
            name: 'sfs',
            author: 'gf',
            // rate: 5,
            id: 6,
            description: 'sdfsfferfer',
            price: 344343
        },
        {
            name: 'sfs',
            author: 'gf',
            // rate: 6,
            id: 7,
            description: 'sdfsfferfer',
            price: 344343
        },
    ]

    const store = useSelector((store: RootUserState ) => store.userReducer)

    const [isLogged, setIsLogged] = useState<boolean>(false)
    useEffect(() => {
        Promise.resolve(store).then(store => {
            if(store.isUserLogged){
                setIsLogged(store.isUserLogged)
            }
        })
        return () => {
            setIsLogged(false)
            Promise.resolve(store).finally(() => {
                if(store.isUserLogged){
                    store.isUserLogged = !store.isUserLogged
                }
            })
        }
    }, [store])

    return ( 
        <div className='Courses-list'>
            {!isLogged && <h2>Sign in to buy course</h2>}
            <ul>
                {courses.map(course => {
                    return <li key={course.id * new Date().getMilliseconds()}><Course
                        name={course.name}
                        author={course.author}
                        description={course.description}
                        price={course.price}
                    /></li>
                })}
            </ul>
        </div>
    );
}

export default Courses;