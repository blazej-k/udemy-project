import React, { FC, useEffect, useRef, useState } from 'react'
import '../../../style/Home.scss'
import Stats from './Stats';
import Reviews from './Reviews';
import Annivesary from './Annivesary';
import { useDispatch } from 'react-redux';
import Recomended from './Recomended';
import { getCourses } from '../../../actions/CoursesActions';


const Home: FC = () => {

    const counters = useRef<HTMLDivElement>(null)

    // const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    // const [recomendedCourses, setRecomendedCourses] = useState<CourseObj[]>([])
    // const coursesStore = useSelector((store: RootState) => store.coursesReducer)

    const showCounters = () => {
        counters.current?.offsetTop && window.pageYOffset >= counters.current?.offsetTop - 1000 && setShow(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        document.addEventListener<any>('scroll', (): void => showCounters())
        return () => {
            document.removeEventListener<any>('scroll', (): void => showCounters())
        }
    }, [])

    // useEffect(() => {
    //     dispatch(getCourses())
    // }, [])

    // useEffect(() => {
    //     Promise.resolve(coursesStore).then((res: CourseObj[]) => {
    //         console.log(1)
    //         if (res.length) {
    //             let numbers: number[] = []
    //             for (let i = 0; i <= 2;) {
    //                 const number = Math.floor(Math.random() * res.length)
    //                 const find = numbers.find(el => el === number)
    //                 if(find === undefined){
    //                     numbers.push(number)
    //                     console.log(2)
    //                     setRecomendedCourses(prev => [...prev, res[number]])
    //                     console.log(3)
    //                     i++
    //                 }
    //             }
    //         }
    //     })
    // }, [coursesStore])

    return (
        <>
            <div className='Home-page' data-aos="fade-up">
                <Annivesary />
                <div className='nav'>
                    <ul>
                        <li><a href='#reviews'>Reviews</a></li>
                        <li><a href='#recomended'>Recomended courses</a></li>
                        <li><a href='#stats' onClick={() => setShow(true)}>Stats</a></li>
                        <li><a href='#footer' onClick={() => setShow(true)}>Footer</a></li>
                    </ul>
                </div>
                <div className='content'>
                    <Reviews />
                    <div className="recomended" id='recomended'>
                        <h2>We recomended: </h2>
                        <Recomended/>
                    </div>
                    <div id='stats'>
                        <h2>Stats</h2>
                    </div>
                    <Stats show={show} counters={counters} />
                </div>
            </div>
        </>
    );
}

export default Home;