import React from 'react'
import styled from '@emotion/styled'

//Components
import Confetti from './Confetti'
import Shadow from './Shadow'
import { FlexBox, Colors } from '../Helpers/Tools'

const DealTitle = styled.div`
	position: relative;
	margin-top: 80px;
	width: 65%;
	font-family: righteous;	
	font-size: 28px;
	text-align: center;
`
const AbsoluteContainer = styled.div`
	position: absolute;
	top: 50;
`
const Deal = ({ mt="0px", title, children, ...props}) => {
	return (
		<FlexBox h="auto" mt={mt} d="column" j="start" a="center">
			<AbsoluteContainer>
				<Confetti />
			</AbsoluteContainer>
			<DealTitle>{ children }</DealTitle>
			<Shadow color={ Colors.shadowBlue }/>
		</FlexBox>
	)
}

export default Deal
