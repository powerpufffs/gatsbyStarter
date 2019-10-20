import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Colors, Title, FlexBox } from '../Helpers/Tools'

const Container = styled(FlexBox)`
	background-color: ${Colors.callout};
	height: auto;
	width: 70%;
	padding: 18px 30px;
	border-radius: 10px;
`
const formatDate = (date) => {
	const ampm = date.getHours() >= 12 ? 'pm' : 'am'
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
	return `${date.getMonth()}/${date.getMonth()} ${date.getHours() % 12}:${minutes}${ampm}`
}

const formatCountDown = (seconds) => {
	const date = new Date(seconds * 1000)
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
	const sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
	return `${minutes}m ${sec}s`
}
const now = new Date()
const Countdown = ({ redeemedAt, onTimerEnd, duration = 30 * 60 }) => {
	const [timeLeft, setTimeLeft] = useState(duration - Math.abs((redeemedAt - now) / 1000)) 
	const redeemedOnText = "Redeemed: " + formatDate(redeemedAt)

	useEffect(() => {
		if (duration - Math.abs((redeemedAt - now) / 1000) < 0)	
			onTimerEnd(redeemedOnText)

		const id = setInterval(() => {
			setTimeLeft(prev => prev - 1)
		}, 1000)

		return () => clearInterval(id)
	}, [])

	useEffect(() => {
		timeLeft < 1 && onTimerEnd(redeemedOnText)
	}, [timeLeft])
	
	return (
		<Container d="column" j="space-around" a="center">
			<Title c={Colors.countdownDetailText} ft='28px'>
				show staff within:
			</Title>
			<Title c={Colors.countdownText} ft='60px'>
				{formatCountDown(timeLeft)}
			</Title>
			<Title c={Colors.countdownDetailText} ft='22px'>
				{redeemedOnText}
			</Title>
		</Container>
	)
}

export default Countdown
