import React, { useEffect, useState, FC } from 'react'
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

    return (
        <div className='Courses-list'>
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