import React, { FC, memo, useEffect, useRef, useState } from 'react'
import '../../../style/Home.scss'
import Stats from './Stats';
import Reviews from './Reviews';
import Annivesary from './Annivesary';
import Recommended from './Recommended';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Home: FC = () => {

    const counters = useRef<HTMLDivElement>(null)

    const [show, setShow] = useState(false)
    const [showRecomended, setShowRecomended] = useState<boolean>(false)

    const showCounters = () => {
        counters.current?.offsetTop && window.pageYOffset >= counters.current?.offsetTop - 1000 && setShow(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => {
            setShowRecomended(true)
        }, 3500)
        document.addEventListener<any>('scroll', (): void => showCounters())
        return () => {
            clearTimeout(timer)
            setShowRecomended(false)
            document.removeEventListener<any>('scroll', (): void => showCounters())
        }
    }, [])



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
                        <h2>We recommend: </h2>
                        {!showRecomended ? <div className='loader'><Loader
                            type="Oval"
                            color='#fb2c48'
                            height={140}
                            width={140}
                        />
                        </div> : <Recommended />}
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

export default memo(Home);