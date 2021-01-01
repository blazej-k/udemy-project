import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCourses } from '../../../actions/CoursesActions'


const Recommended: FC = () => {


    const dispatch = useDispatch()
    const history = useHistory()

    const [recommendedCourses, setRecommendedCourses] = useState<CourseObj[]>([])
    const [subscribe, setSubscribe] = useState<boolean>(true)

    const coursesStore = useSelector((store: RootState) => store.coursesReducer)

    useEffect(() => {
        dispatch(getCourses())
        return () => {
            setRecommendedCourses([])
            setSubscribe(false)
        }
    }, [])

    useEffect(() => {
        if (subscribe) {
            const { courses } = coursesStore
            if (recommendedCourses.length === 3) return;
            if (courses.length) {
                let numbers: number[] = []
                for (let i = 0; i <= 2;) {
                    const number = Math.floor(Math.random() * courses.length)
                    const find = numbers.find(el => el === number)
                    if (find === undefined) {
                        numbers.push(number)
                        setRecommendedCourses(prev => [...prev, courses[number]])
                        if (recommendedCourses.length === 3) break;
                        i++
                    }
                }
            }

        }
    }, [coursesStore])

    const redirectToClickedCourse = (e: React.MouseEvent<HTMLDivElement>): void => {
        history.push(`/courses/#${e.currentTarget.id}`)
    }

    return (
        <div className='recommended-courses' data-aos="fade-up">
            {recommendedCourses.length > 0 && recommendedCourses.map((course, index) => {
                if (index > 2) return null
                return <div className="Home-course" key={course._id} onClick={redirectToClickedCourse} id={String(course._id)}>
                    <img src={course.imgStringsTab} alt="recommended" />
                    <h2>{course.name}</h2>
                    <span>{course.author}</span>
                </div>
            })}
        </div>
    );
}

export default Recommended;