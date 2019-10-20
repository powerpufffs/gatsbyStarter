/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Confetti from 'react-dom-confetti'

const config = {
	angle: 300,
	spread: 90,
	startVelocity: 45,
	elementCount: 50,
	dragFriction: 0.1,
	duration: 3000,
	stagger: 0,
	width: "10px",
	height: "10px",
	colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
}

const ConfettiAnimation = ({ active, ...props }) => {
	return (
		<>
			<Confetti active={active} config={config} css={css`z-index: 10;`}/>
		</>
	)
}

export default ConfettiAnimation
