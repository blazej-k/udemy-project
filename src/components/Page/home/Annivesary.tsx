import React, { FC, useEffect } from 'react'
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import NumberCounter from 'number-counter';



const Annivesary: FC = () => {

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
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((state) => (state + 1) % items.length);
        }, 4000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div className='annivesary'>
            <br /><br /><br /><br />
            <h1 data-aos="fade-up"><NumberCounter end={10} delay={1.3} className="counter" /> years of
                    {fadingTextPropsTransition.map(({ item, props, key }) => (
                <animated.div key={key} style={{ ...props, position: 'absolute', width: '100%', textAlign: 'center' }}>
                    {item.title}
                </animated.div>
            ))}
            </h1>
        </div>
    );
}

export default Annivesary;