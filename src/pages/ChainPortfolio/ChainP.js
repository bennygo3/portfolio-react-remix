import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'

import './ChainP.css';
import {data} from './data';

export default function Chain() {
    const [open, set] = useState(false)

    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '20%', background: 'hotpink' },
        to: {
            size: open ? '100%' : '20%',
            background: open ? 'white' : 'hotpink',
        },
    })

    const transApi = useSpringRef()
    const transition = useTransition(open ? data : [], {
        ref: transApi,
        trail: 400 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })

    //Orchestrates the two animations above, comment the last arg and a sequence is created
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])

    return (
        <div className='wrapperTwo'>
            <animated.div
                style={{ ...rest, width: size, height: size }}
                className='containerTwo'
                onClick={() => set(open => !open)}
                >
                {transition((style, item) => (
                    <animated.div
                        className='item'
                        style={{ ...style, background: item.css }}
                    />
                    
                    
                ))}
            </animated.div>
        </div>
    )
}