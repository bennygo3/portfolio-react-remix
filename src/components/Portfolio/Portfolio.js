// import { createRoot } from 'react-dom/client';
import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring'; // changed to to from interpolate -deprecated
import { useGesture } from '@use-gesture/react'; // was 'react-use-gesture' no longer maintained
import lilCowboy from '../../assets/babyBenCowboyPlastic.png';
import remote from '../../assets/tvRemote.svg';
// import { render } from '@testing-library/react';
import './Portfolio.css';

const Portfolio = () => {
const pages = [
   `${ lilCowboy }`,
   `${ remote }`
]


    const index = useRef(0)
    const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
    const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerWidth / 2)
            cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length -1)))
        set(i => {
            if (i < index.current -1 || i > index.current + 1) return { display: 'none'}
            const x = (i - index.current) * window.innerWidth + (down ? xDelta: 0)
            const sc = down ? 1 - distance / window.innerWidth / 2 : 1
            return { x, sc, display: 'block' }
        }) 
    })
    return props.map(({ x, display, sc }, i) => (
        <animated.div id="cardContainer" {...bind()} key={i} style ={{ display, transform: x.to(x => `translate3d(${x}px,0,0)`) }}>
            <animated.div id="card" style={{ transform: sc.to(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
        </animated.div>
    ))
}



export default Portfolio

// // These two are just helpers, they curate spring data, values that are later being interpolated into css
// const go = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 }) // changed to to go. was causing error due to duplicate declarations. originally changed interpolate due to deprecation
// const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// // This is bein used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r,s) => `perspective (1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


// const Portfolio = () => {
//     const [gone] = useState(() => new Set()) //Set flags all the cards that are moved
//     const [props, set] = useSprings(cards.length, i => ({...go(i), from: from(i)})) // Creates a bunch of springs using helpers from above
//     // Creates gesture of moving cards, delta (current-pos - click-pos), direction and velocity
//     const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
//         const trigger = velocity > 0.2 // If flicked hard enough it should trigger card to fly out
//         const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//         if (!down && trigger) gone.add(index) // If button/finger is up and trigger vel is reached, card is flagged as ready to fly out
//         set(i => {
//             if (index !== i) return // only interested in spring-data for the current spring
//             const isGone = gone.has(index)
//             const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys left or right, otherwise goes back to zero
//             const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//             const scale = down ? 1.1 : 1 // active cards lift up a bit
//             return { x, rot, scale, delay: undefined, config: {friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//         })
//         if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
//     })
//     // Mapping animated values to view
//     return props.map(({ x, y, rot, scale }, i) =>(
//        <animated.div key={i} style={{ transform: to([x,y], (x,y) => `translate3d(${x}px,0)`)}}>
//             {/* this is the card itself, binding gesture to it (and inject it's index so each is definitive) */}
//             <animated.div {...bind(i)} style={{ transform: go([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//        </animated.div> 
//     ))
    
// }
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Portfolio />)






// export default Portfolio

// These two are just helpers, they curate spring data, values that are later being interpolated into css
// const go = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 }) // changed to to go. was causing error due to duplicate declarations. originally changed interpolate due to deprecation
// const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// // This is bein used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r,s) => `perspective (1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


// const Portfolio = () => {
//     const [gone] = useState(() => new Set()) //Set flags all the cards that are moved
//     const [props, set] = useSprings(cards.length, i => ({...go(i), from: from(i)})) // Creates a bunch of springs using helpers from above
//     // Creates gesture of moving cards, delta (current-pos - click-pos), direction and velocity
//     const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
//         const trigger = velocity > 0.2 // If flicked hard enough it should trigger card to fly out
//         const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//         if (!down && trigger) gone.add(index) // If button/finger is up and trigger vel is reached, card is flagged as ready to fly out
//         set(i => {
//             if (index !== i) return // only interested in spring-data for the current spring
//             const isGone = gone.has(index)
//             const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys left or right, otherwise goes back to zero
//             const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//             const scale = down ? 1.1 : 1 // active cards lift up a bit
//             return { x, rot, scale, delay: undefined, config: {friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//         })
//         if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
//     })
//     // Mapping animated values to view
//     return props.map(({ x, y, rot, scale }, i) =>(
//        <animated.div key={i} style={{ transform: to([x,y], (x,y) => `translate3d(${x}px,0)`)}}>
//             {/* this is the card itself, binding gesture to it (and inject it's index so each is definitive) */}
//             <animated.div {...bind(i)} style={{ transform: go([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//        </animated.div> 
//     ))
    
// }
