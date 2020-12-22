import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../../actions/CoursesActions'


const Recomended: FC = () => {


    const dispatch = useDispatch()

    const [recomendedCourses, setRecomendedCourses] = useState<CourseObj[]>([])
    const coursesStore = useSelector((store: RootState) => store.coursesReducer)

    useEffect(() => {
        dispatch(getCourses())
    }, [])

    useEffect(() => {
        Promise.resolve(coursesStore).then((res: CourseObj[]) => {
            if (res.length) {
                let numbers: number[] = []
                for (let i = 0; i <= 2;) {
                    const number = Math.floor(Math.random() * res.length)
                    const find = numbers.find(el => el === number)
                    if (find === undefined) {
                        numbers.push(number)
                        setRecomendedCourses(prev => [...prev, res[number]])
                        i++
                    }
                }
            }
        })
    }, [coursesStore])

    return (
        <>{recomendedCourses.length && recomendedCourses.map(course => (
            <div className="Home-course" key={course._id}>
                <img src={course.imgStringsTab} style={{ width: '10%' }} alt="recomended" />
                <h2>{course.name}</h2>
                <div>{course.price}</div>
            </div>
        ))}
        </>
    );
}

export default Recomended;