import React from 'react'
import styled from '@emotion/styled'

//Components

const MainInput = ({
	mt="0px", 
	w="auto", 
	h="auto", 
	placeholder="enter here", 
	color="black", 
	phColor="black", 
	phSize="16px",
	phFont="righteous",
	textFormatter,
	...props
}) => {
	const Input = styled.input`
		background-color: transparent;
		outline: 0;
		border: 0;
		border-bottom: 2px solid gray;
		padding: 8px;
		margin-top: ${mt};
		width: ${w};
		height: ${h};
		color: ${color};
		text-align: center;
		font-size: ${phSize};
		&::placeholder {
			overflow: auto;
			text-align: center;
			font-family: ${phFont};
			color: ${phColor};
			font-size: ${phSize};
		}
	`
	const handleChange = (e) => {
		e.target.value = textFormatter(e.target.value)
	}
	return (
		<Input placeholder={ placeholder } onChange={ handleChange }/>
	)
}

export default MainInput
