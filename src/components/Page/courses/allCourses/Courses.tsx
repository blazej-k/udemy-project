import React, { useEffect, useState, FC } from 'react'
import Course from '../Course'

const Courses: FC = () => {

    let courses: CourseObj[] = [
        {
            name: 'sfs',
            author: 'gf',
            rate: 3,
            id: 1,
            description: 'sdfsfferfer',
            price: 344343
        },
        {
            name: 'sfs',
            author: 'gf',
            rate: 3,
            id: 2,
            description: 'sdfsfferfer'
            ,
            price: 344343
        },
        {
            name: 'sfs',
            author: 'gf',
            rate: 3,
            id: 8,
            description: 'sdfsfferfer',
            price: 344343
        },
        {
            name: 'sfs',
            author: 'gf',
            rate: 4,
            id: 8,
            description: 'sdfsfferfer',
            price: 344343
        },

        {
            name: 'sfs',
            author: 'gf',
            rate: 5,
            id: 8,
            description: 'sdfsfferfer',
            price: 344343
        },
        {
            name: 'sfs',
            author: 'gf',
            rate: 6,
            id: 8,
            description: 'sdfsfferfer',
            price: 344343
        },
    ]

    return (
        <div className='Courses-list'>
            <ul>
                {courses.map(course => {
                    return <li><Course
                        name={course.name}
                        author={course.author}
                        rate={course.rate}
                        description={course.description}
                        price={course.price}
                    /></li>
                })}
            </ul>
        </div>
    );
}

export default Courses;