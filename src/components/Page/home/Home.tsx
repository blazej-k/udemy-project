import React, { FC, useEffect, useRef, useState } from 'react'
import '../../../style/Home.scss'
import CountTo from 'react-count-to';
import NumberCounter from 'number-counter';
import { animated, useTransition } from 'react-spring'
import { NavLink } from 'react-router-dom';
import { BiCopyright } from 'react-icons/bi';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';




const Home: FC = () => {
 

    const [items] = useState([
        { title: 'Expirience', id: 0 },
        { title: 'Science', id: 1 },
        { title: 'Joy', id: 2 },
        { title: 'Evolution', id: 3 },
        { title: 'Growth', id: 4 },
        { title: 'PRIDE!', id: 5 }
    ]);
    const [index, setIndex] = useState(0);
    const fadingTextPropsTransition = useTransition(items[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000},
    });

    const counters = useRef<HTMLDivElement>(null)

    const [show, setShow] = useState(false)

    const showCounters = () => {
        counters.current?.offsetTop && window.pageYOffset >= counters.current?.offsetTop - 1000 && setShow(true)
    }

    useEffect(() => {
        document.addEventListener<any>('scroll', (): void => showCounters())
        const interval = setInterval(() => {
            setIndex((state) => (state + 1) % items.length);
        }, 4000);
        return () => {
            document.removeEventListener<any>('scroll', (): void => showCounters())
            clearInterval(interval);
        }
    }, [])

    const val = (value: any) => <div className='value'><b>{value}</b></div>;


    return (
        <>
            <div className='Home-page'>
                <div className='annivesary'>
                    <br /><br /><br /><br />
                    <h1 data-aos="fade-up"><NumberCounter end={10} delay={1} className="counter" /> years of
                    {fadingTextPropsTransition.map(({ item, props, key }) => (
                        <animated.div key={key} style={{ ...props, position: 'absolute', width:'100%', textAlign: 'center'}}>
                            {item.title}
                        </animated.div>
                    ))}
                    </h1>
                </div>
                <div className='nav'>
                    <ul>
                        <li><a href='#reviews'>Reviews</a></li>
                        <li><a href='#recomended'>Recomended courses</a></li>
                        <li><a href='#stats' onClick={() => setShow(true)}>Stats</a></li>
                        <li><a href='#footer' onClick={() => setShow(true)}>Footer</a></li>
                    </ul>
                </div>
                <div className='content'>
                    <div className="reviews" data-aos="fade-right" data-aos-once={true} id='reviews'>
                        <div className='review'>
                            <p>In modern-day Chile, the affable 83-year-old Sergio Chamy is hired by a private
                            detective firm to go undercover at a local home for the elderly in order to investigate claims
                            of staff mistreatment. Immediately popular with other residents, his burgeoning friendships
                            both help and hinder his mission.<br /><br />
                                <span className='author'>Romano Delgado</span>
                            </p>
                        </div>
                        <div className='review' data-aos="fade-left" data-aos-once={true}>
                            <p>Wide-eyed 12-year-old Kingsley (Kenyah Sandy) dreams of being an astronaut,
                            but when difficulty in reading brands him ‘disruptive’ he’s shipped off to an
                            ‘educationally subnormal’ school. When it turns out to be a wasteland for Black
                            kids with educational needs, the Black community of ‘70s London organise to unearth the racism
                            at the heart of their schools.<br /><br />
                                <span className='author'>Jon Taddick</span>
                            </p>
                        </div>
                        <div className='review' data-aos="fade-right" data-aos-once={true}>
                            <p>The year is 2049, and the Earth is toast. Three weeks after a devastating
                            global “event” that has left the planet uninhabitable, reclusive scientist
                            Augustine Lofthouse (George Clooney) races to stop a team of astronauts from returning,
                            thereby accidentally dooming the future of the species.<br /><br />
                                <span className='author'>Murphy Eddans</span>
                            </p>
                        </div>
                        <div className='review' data-aos="fade-left" data-aos-once={true}>
                            <p>The true story of award-winning writer Alex Wheatle (Sheyi Cole), seen as a young boy through
                            to his early adult years. When he is thrown in prison during the Brixton uprising of 1981,
                            he reflects on his past, and finds a sense of community for the first time.<br /><br />
                                <span className='author'>Andrzej Bociński</span>
                            </p>
                        </div>
                        <div className='review' data-aos="fade-right" data-aos-once={true}>
                            <p>When lesbian high-schooler Emma (Jo Ellen Pellman) plans to attend her prom with a girl
                            in small-town Indiana, the head of the PTA (Kerry Washington) shuts the whole bash down.
                            Enter vain, failing Broadway stars Dee Dee Allen (Meryl Streep) and Barry Glickman (James Corden),
                            who hope publicly supporting Emma’s plight will finally earn them some positive publicity.<br /><br />
                                <span className='author'>Warren Allan</span>
                            </p>
                        </div>
                    </div>
                    <div className="recomended" id='recomended'>
                        <h2>We recomended: </h2>
                    </div>
                    <div id='stats'>
                        <h2>Stats</h2>
                    </div>
                    <div className='counters-wrapper' ref={counters} id='stats'>
                        {show && <div className='counters'>
                            <div className="counter-users">
                                <CountTo to={953445} speed={3000} >{val}</CountTo><br />
                                <div className='des'>users</div>
                            </div>
                            <div className='counter-courses'>
                                <CountTo to={45345} speed={3000} >{val}</CountTo><br />
                                <div className='des'>courses</div>
                            </div>
                            <div className='counter-reviews'>
                                <CountTo to={92432} speed={3000} >{val}</CountTo><br />
                                <div className='des'>positive reviews</div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div id='footer'>
                    <div className='pages'>
                        <h3>Links:</h3>
                        <ul>
                            <li>
                                <NavLink to='/' exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/courses' exact>Buy course</NavLink>
                            </li>
                            <li>
                                <NavLink to='/myCourses' exact>My courses</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' exact>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to='/job' exact>Work with us</NavLink>
                            </li>
                            <li>
                                <NavLink to='/regulations' exact>Regulations</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='contact'>
                        <h3>Contact in:</h3>
                        <ul>
                            <li>Warszawa, ul.Piłsudskiego 25a,</li>
                            <li>tel: 434-654-254</li>
                            <li>e-mail: contact@udemy.com</li>
                            <li id='social-media'><AiFillFacebook /><FiInstagram /><AiOutlineTwitter /></li>
                        </ul>
                    </div>
                    <div className="authors">
                        <h3>This page was made by:</h3>
                        <ul>
                            <li>UdemyGroupIT</li>
                            <li>TechWeb</li>
                            <li>Star Servers</li>
                        </ul>
                    </div><br />
                    <div className="copyright">UdemyGroup <BiCopyright style={{ fontSize: '70%' }} /> {new Date().getFullYear()} all rights reserved</div>
                </div>
            </div>
        </>
    );
}

export default Home;