import React from 'react'
import styled from '@emotion/styled'
import { Colors } from '../Helpers/Tools'

const UsedButton = ({mt="5px", w="auto", minW="none", h="auto", onClick, color=Colors.red, ...props }) => {
	const Button = styled.button`
		height: ${h};
		width: ${w};
		margin-top: ${mt};
		min-width: ${minW};
		background-color: transparent;
		border: 3px solid ${color};
    	padding: 3px 0px;
		border-radius: 999px;
		color: ${color};
		font-size: 30px;
		font-family: righteous;
		letter-spacing: 2px;
		box-sizing: border-box;
		text-align: center;
	`
	return ( 
		<Button onClick={onClick}>
			{ props.children }
		</Button>
	)
}

export default UsedButton
