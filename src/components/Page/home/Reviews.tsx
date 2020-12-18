import React, { FC } from 'react'


const Reviews: FC = () => {
    return (
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
    );
}

export default Reviews;