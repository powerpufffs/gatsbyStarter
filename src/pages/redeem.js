import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import axios from 'axios'
import queryString from 'query-string'

//Components
import { FlexBox, Title, CenterAbsolute, Dimensions } from "../Helpers/Tools"
import Layout from "../components/layout"
import Mural from "../components/Mural"
import LoadFont from "../components/LoadFont"
import Deal from "../components/Deal"
import MainButton from "../components/MainButton"
import UsedButton from "../components/UsedButton"
import Callout from "../components/Callout"
import ConfettiAnimation from "../components/ConfettiAnimation"
import ActionMenu from "../components/ActionMenu"
import FadeWithDelay from "../components/FadeWithDelay"
import FadeAndHover from "../components/FadeAndHover"
import Countdown from "../components/Countdown";

const Container = styled.div`
  position: relative;
  height: 100vh;
  max-width: 450px;
  margin: 0 auto;
  font-family: righteous;
  background-color: transparent;
`
const parseQueryParams = () => {
  const params = queryString.parse(window.location.search)
}
const delayStart = 400
const issueCouponUrl = 'http://localhost:9000/coupons/issue'
const redeemCouponUrl = 'http://localhost:9000/coupons/redeem'
const testingDate = new Date()
testingDate.setMinutes(testingDate.getMinutes() - 20)

const Redeem = () => {
	const [toRedeem, setRedeem] = useState(null)
  const [expired, setExpired] = useState(null)
  const [couponInfo, setCouponInfo] = useState(null)
  const params = parseQueryParams()

  useEffect(() => {
    const source = axios.CancelToken.source()

    const getCoupon = () => {
      axios.post(issueCouponUrl, {
        userId: "recruotHLrzx1Nfpp", 
        boostId: "rec6D4BbhHqEXKgri"
      })
      .then(res => {
        setCouponInfo(res.data)
        setRedeem(res.data.isRedeemed)
      })
      .catch(error => {
        console.log(error)
      })
    }

    getCoupon()
    return () => { 
      source.cancel()
    }
  }, [])
 
  const handleClick = () => {
    axios.post(redeemCouponUrl, {
      couponId: couponInfo && couponInfo.id
    })
    .then(res => {
      setCouponInfo(res.data)
      setRedeem(true)
    })
    .catch(error => {
      console.log(error)
    })
	}
	const onTimerEnd = () => {
		setExpired(true)
  }

  return (
		<>
      <LoadFont />
      <Container>
        <ConfettiAnimation active={toRedeem} />
        <FlexBox
          d="column"
          j="space-between"
          a="center"
          maxH={Dimensions.maxHeight}
        >
          <Deal mt="20px">
            {couponInfo && couponInfo.name}
          </Deal>
          <FlexBox d="column" j="start" a="center" mt="20px">
            { toRedeem ? (
                ( expired ? (
                    <UsedButton mt="8px" w="65%" h="50px" min-h>
                      Redeemed
                    </UsedButton> 
                  ) : (
                    <Countdown redeemedAt={couponInfo.redeemedAt && new Date(couponInfo.redeemedAt)} onTimerEnd={onTimerEnd}/>
                  )
                )
              ) : (
                <>
                  <FadeAndHover delay={delayStart + 2000} animate={!toRedeem}>
                    <Callout w="55%">
                      Tap here to use your deal! You will have 30 minutes to show the
                      restaurant
                    </Callout>
                  </FadeAndHover>
                  <FadeWithDelay delay={delayStart + 600} animate={!toRedeem}>
                    <MainButton mt="8px" w="65%" onClick={handleClick}>
                      Redeem
                    </MainButton>
                  </FadeWithDelay>
                </>
              )
            }
            <FadeWithDelay delay={delayStart + 900} animate={!toRedeem}>
              <Title mt="20px" w="50%" ta="center" ftSize="15px">
                {couponInfo && couponInfo.disclaimer}
              </Title>
            </FadeWithDelay>
            <FadeWithDelay delay={delayStart + 1200} animate={!toRedeem}>
              <ActionMenu mt="20px" />
            </FadeWithDelay>
          </FlexBox>
        </FlexBox>
      </Container>
			<CenterAbsolute z="-1">
				<Mural />
			</CenterAbsolute>
		</>
  )
}

export default Redeem
