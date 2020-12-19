import React, { FC, useEffect, useRef, useState } from 'react'
import '../../../style/Home.scss'
import Footer from '../footer/Footer'
import Stats from './Stats';
import Reviews from './Reviews';
import Annivesary from './Annivesary';


const Home: FC = () => {

    const counters = useRef<HTMLDivElement>(null)

    const [show, setShow] = useState(false)

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

    return (
        <>
            <div className='Home-page'>
                <Annivesary/>
                <div className='nav'>
                    <ul>
                        <li><a href='#reviews'>Reviews</a></li>
                        <li><a href='#recomended'>Recomended courses</a></li>
                        <li><a href='#stats' onClick={() => setShow(true)}>Stats</a></li>
                        <li><a href='#footer' onClick={() => setShow(true)}>Footer</a></li>
                    </ul>
                </div>
                <div className='content'>
                    <Reviews/>
                    <div className="recomended" id='recomended'>
                        <h2>We recomended: </h2>
                    </div>
                    <div id='stats'>
                        <h2>Stats</h2>
                    </div>
                    <Stats show={show} counters={counters}/>
                    {/* <Footer/> */}
                </div>
            </div>
        </>
    );
}

export default Home;