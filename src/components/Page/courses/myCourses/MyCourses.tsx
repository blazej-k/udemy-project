import React, { useState, FC, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import Course from '../Course'


const MyCourses: FC = () => {

    const store = useSelector((store: RootState) => store.userReducer)

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>()
    const [imgStrings, setImgStrings] = useState<string[]>([])

    const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
        let binary = '';
        const bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    useLayoutEffect(() => {
        // Promise.resolve(store).then(res => {
        //     const base64Flag = 'data:image/jpeg;base64,';
        //     const imgStringsTab: string[] = []
        //     courses !== res.courses && res.courses?.map(course => {
        //         const imageStr = arrayBufferToBase64(course.img.data.data);
        //         return imgStringsTab.push(base64Flag + imageStr) 
        //     })
        //     // setImgStrings(imgStringsTab)
        //     // res.courses && setCourses(res.courses)
        //     console.log(res)
        // })
        const localStorage = window.localStorage.getItem('store')
        if (localStorage !== null) {
            const store: User = JSON.parse(localStorage)
            setIsLogged(store.isUserLogged || false)
            setCourses(store.courses || [])
        }
        else {
            Promise.resolve(store).then(store => {
                if ((store.courses) && (store.isUserLogged)) {
                    setIsLogged(store.isUserLogged)
                    setCourses(store.courses)
                }
            })
        }
        return () => {
            setCourses([])
            setIsLogged(false)
        }
    }, [store])

    const coursesElement =
        <ul>
            {courses.map(course => {
                return course._id && <li key={course._id}><Course
                    name={course.name}
                    author={course.author}
                    description={course.description}
                    img={course.img}
                    id={course._id}
                /></li>
            })}
        </ul >
    return (
        <div className="MyCourses-list">
            {isLogged ? courses.length ? coursesElement : <h1>Buy some courses and go learn!</h1> :
                <h1>Sign in to see your bought courses</h1>}
        </div>
    );
}

export default MyCourses;