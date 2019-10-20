import React, { useState } from 'react'
import styled from '@emotion/styled'
//Components
import { Colors } from '../Helpers/Tools'

const MainButton = ({mt="5px", w="auto", minW="none", h="auto", onClick, color=Colors.red, className, ...props }) => {
	const Button = styled.button`
		height: ${h};
		width: ${w};
		margin-top: ${mt};
		min-width: ${minW};
		background-color: ${color};
		border: none;
    	padding: 3px 0px;
		border-radius: 999px;
		color: white;
		font-size: 30px;
		font-family: righteous;
		letter-spacing: 2px;
		box-sizing: border-box;
		text-align: center;
		&:hover {
			transform: scale(1.05);
		}
	`
	return ( 
		<Button onClick={onClick} className={className}>
			{ props.children }
		</Button>
	)
}

export default MainButton
