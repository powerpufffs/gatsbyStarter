import React, { Children } from 'react'
import styled from '@emotion/styled'

export const FlexBox = ({d, j, a, mt='none', w="100%", h="100%", maxH="none", className, ...props}) => {
	const FlexBox = styled.div`
		position: relative;
		height: ${h};
		max-height: ${maxH};
		width: ${w};
		display: flex;
		flex-direction: ${d};
		justify-content: ${j ? j : `flex-${j}`};
		align-items: ${a ? a : `flex-${a}`};
		margin-top: ${mt};
	`
	return (
		<FlexBox className={className}>
			{ props.children }
		</FlexBox>
	)
}

//Components that provides common css control
export const Box = ({
	pos="relative",
	mt="none", 
	mb="none",
	pl="none",
	mr="none",
	align="center",
	z="auto",
	className,
	children,
	...props
}) => {
	const Container = styled.div`
		position: ${pos};
		margin-top: ${mt};
		margin-bottom: ${mb};
		padding-left: ${pl};
		mr: ${mr};
		align-self: ${align};
		z-index: ${z};
	`
	return (
		<Container className={className}>
			{children}
		</Container>
	)
}

export const Title = ({mt="5px", ft="16px", w="none", ta="center", c="auto", onSelect, ...props}) => {
	const Text = styled.div`
		margin-top: ${mt};
		font-size: ${ft};
		width: ${w};
		text-align: ${ta};
		color: ${c};
	`
	return (
		<Text onClick={onSelect}>{ props.children }</ Text>
	)
}

//Styled Components

export const CenterAbsolute = ({mt="auto", z="auto", t="50%", children, ...props}) => {
	const Container = styled.div`
		margin-top: ${mt};
		z-index: ${z};
		position: absolute;
		top: ${t};
		left: 50%;
		transform: translate(-50%, -50%);
	`
	return (
		<Container>
			{ children }
		</Container>
	)
}

//Custom functions

export const phoneRegexFormatter = (text) => {
	var x = text.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
  return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
}

//Colors

export const Colors = {
	shadowBlue: 'hsl(197, 100%, 86%)',
	secondary: 'hsl(0, 0%, 30%)',
	placeholderGray: 'hsl(0, 0%, 45%)',
	red: 'hsl(356, 78%, 62%)',
	callout: 'hsla(258, 100%, 81%, 97%)',
	calloutText: 'hsl(260, 100%, 49%)',
	countdownText: 'hsl(270, 100%, 30%)',
	countdownDetailText: 'hsl(260, 100%, 49%)',
}

//Sizes

export const Dimensions = {
	maxWidth: '450px',
	muralWidth: 551,
	maxHeight: '900px',
}

