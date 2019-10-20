import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

//Components
import { FlexBox, Colors, Title, CenterAbsolute, Dimensions, phoneRegexFormatter } from '../Helpers/Tools'
import Mural from '../components/Mural'
import LoadFont from '../components/LoadFont'
import MainInput from '../components/MainInput'
import Deal from '../components/Deal'
import MainButton from '../components/MainButton'
import SmallText from '../components/SmallText'
import ConfettiAnimation from '../components/ConfettiAnimation'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Container = styled.div`
	position: relative;
	height: 100vh;
	max-width: 450px;
	margin: 0 auto;
	font-family: righteous;
	background-color: transparent;
`
const DisclaimerContainer = styled.div`
	margin-top: 10px;
	font-family: PT sans;
	width: 70%;
`
const CenteredAnilink = styled(AniLink)`
	width: 100%;
	display: flex;
	justify-content: center;
	text-decoration: none;
`
const ReferralPage = () => {
	const [animate, setAnimate] = useState(false)

	const handleClick = () => {
		setAnimate(!animate)
	}

	return (
		<>
			<LoadFont />
			<Container>
				<FlexBox d="column" j="space-evenly" a="center" >
					<Deal mt="20px">
						$5 Margherita Pizza w/ Purchase of a Beverage OR $5 Off a Specialty Pizza
					</Deal>
					<FlexBox d="column" j="center" a="center" w="100%" mt="20px">
						<MainInput 
							placeholder="(XXX) XXX-XXXX" 
							color={ Colors.placeholderGray } 
							phColor={ Colors.placeholderGray } 
							phSize="22px"
							textFormatter={ phoneRegexFormatter }
							w="60%"
						/>
						<CenteredAnilink
							paintDrip
							to={`/redeem`}
							hex='#E74953'
							duration={0.5}
						>
							<MainButton mt="20px" w="70%" onClick={handleClick}>
								Get Coupon
							</MainButton>
						</CenteredAnilink>
						<DisclaimerContainer>
							<SmallText ftSize="13px">
								By clicking, I agree to receive automated marketing messages from 
								Brasas Mexican Grill & Boostly at the number provided. 
								Consent is not required to purchase goods or services. 
								Msg & Data rates may apply. __ msgs/mo.
							</SmallText>
						</DisclaimerContainer>
						<Title mt="20px">Valid for 7 days</Title>
					</FlexBox>	
				</FlexBox>
			</Container>
			<CenterAbsolute z="-1">
				<Mural/>
			</CenterAbsolute>
		</>
	)
}

export default ReferralPage
