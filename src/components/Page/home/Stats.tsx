import React, { FC, RefObject } from 'react'
import CountTo from 'react-count-to';

type StatsProps = {
    show: boolean,
    counters: RefObject<HTMLDivElement>
}


const Stats: FC<StatsProps> = ({ show, counters }) => {

    const val = (value: any) => <div className='value'><b>{value}</b></div>;

    return (
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
    );
}

export default Stats;