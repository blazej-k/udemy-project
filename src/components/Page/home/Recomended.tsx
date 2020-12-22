import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCourses } from '../../../actions/CoursesActions'


const Recomended: FC = () => {


    const dispatch = useDispatch()
    const history = useHistory()

    const [recomendedCourses, setRecomendedCourses] = useState<CourseObj[]>([])
    const coursesStore = useSelector((store: RootState) => store.coursesReducer)

    useEffect(() => {
        dispatch(getCourses())
        return () => {
            setRecomendedCourses([])
        }
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

    const redirectToClickedCourse = (e: React.MouseEvent<HTMLDivElement>): void => {
        history.push(`/courses/#${e.currentTarget.id}`)
    }

    return (
        <div className='recomended-courses' data-aos="fade-up">
            {recomendedCourses.length > 0 && recomendedCourses.map(course => (
                <div className="Home-course" key={course._id} onClick={redirectToClickedCourse} id={String(course._id)}>
                    <img src={course.imgStringsTab} alt="recomended" />
                    <h2>{course.name}</h2>
                    <span>{course.author}</span>
                </div>
            ))}
        </div>
    );
}

export default Recomended;