import React from 'react'
import styled from '@emotion/styled'
//components
import { Colors, Box, FlexBox } from '../Helpers/Tools'
import { Triangle } from '../../public/icons/Icons'


const Callout = ({ color=Colors.callout, mt="none", w="auto", h="auto", arrowOffset, className, children }) => {
	const Container = styled.div`
		background-color: ${color};
		margin-top: ${mt};
		padding: 12px 14px;
		border-radius: 12px;
		width: ${w};
		height: ${h};
		text-align: center;
		font-size: 18px;
		align-self: center;
	`
	return (
		<FlexBox d="column" className={className} h="">
			<Container>
				{ children }
			</Container>	
			<Box align={arrowOffset? "none" : "center"} pl={arrowOffset? arrowOffset : "none"}>
				<Triangle color={color}/>
			</Box>
		</FlexBox>
	)
}

export default Callout
