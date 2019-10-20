import React, { useState, useEffect } from 'react'
import posed from 'react-pose'
import styled from '@emotion/styled'

const config = {
	on: {
		opacity: 1
	},
	off: {
		opacity: 0
	}
}
const Animate = styled(posed.div(config))`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const FadeWithDelay = ({ delay="0", children, animate=true, ...props }) => {
	const [toFade, setFade] = useState(false)

	useEffect(() => {
		animate &&
		setTimeout(() => {
			setFade(true)
		}, delay) 
	}, [])
	
	return (
		<Animate pose={animate ? (toFade ? 'on' : 'off') : 'on'}>
			{ children }
		</Animate>
	)
}

export default FadeWithDelay
