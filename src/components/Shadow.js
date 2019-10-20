import React from 'react'
import styled from '@emotion/styled'

const Shadow = ({ color }) => {
	const Oval = styled.div`
		width: 120px;
		height: 20px;
		background-color: ${ color };
		border-radius: 50%;
		margin-top: 20px;
	`
	return ( <Oval /> )
}

export default Shadow