import React, { useState, useEffect } from 'react'
import posed from 'react-pose'
import FadeWithDelay from '../components/FadeWithDelay'

const Hover = posed.div({
	on: { 
		y: '-10px',
		transition: {
			ease: 'easeIn',
			duration: 850,
		} 
	},	
	off: { 
		y: '0px',
		transition: {
			ease: 'easeOut',
			duration: 800,
		} 
	},
})

const FadeAndHover = ({ delay, children, className }) => {
	const [toPose, setPose] = useState(false)

	useEffect(() => {
		const id = setInterval(() => {
			setPose(prev => !prev)
		}, 1000)

		return () => clearInterval(id)
	}, [])

	return (
		<FadeWithDelay delay={delay} className={className}>
			<Hover pose={toPose ? 'on' : 'off'}>
				{ children }
			</Hover>
		</FadeWithDelay>
	)
}

export default FadeAndHover
