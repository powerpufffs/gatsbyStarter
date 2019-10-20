import React from "react"
import styled from '@emotion/styled'
//Components
import { CallLogo, ShareLogo } from "../../public/icons/Icons"
import { FlexBox } from "../Helpers/Tools"
import ActionIcon from "../components/ActionIcon"

const AbsoluteContainer = styled.div`
	position: absolute;
	transform: translateY(-110%);
`
const call = () => {
  document.location.href="tel://+18015896615"
}

const getMobileOS = () => {
  if (typeof window !== `undefined`) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows"
    }
    if (/android/i.test(userAgent)) {
        return "Android"
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS"
    }
    return "Desktop"
  }
}

const ActionMenu = ({ mt = "12px", clicked, children }) => { 
  const deviceType = getMobileOS()
  
  const share = () => {
    console.log(deviceType)
    if (navigator.share) {
      navigator
      .share({
        title: "My Coupon",
        text: "Check out this sweet, sweet deal!",
        url: window.location.href,
      })
      .then(() => console.log("Successful share"))
      .catch(error => console.log("Error sharing", error))
    } else {
      let message = `Check this coupon out! ${window.location.href}`.replace(" ", "%20")
      if (deviceType === "Android") {
        console.log("Android")
        document.location.href=`sms://+11234567890/?body=${message}`
      } else if (deviceType === "iOS") {
        console.log("iOS")
        document.location.href=`sms://+11234567890/&body=${message}`
      } 
    }
  }
  const actionButtonActions = [call, share]
  
  return (
    <FlexBox mt={mt} j="space-around" a="start" w="100%">
      <ActionIcon onSelect={call}>
        <CallLogo />
      </ActionIcon>
      {deviceType != "Desktop" && 
        <ActionIcon onSelect={() => share()}>
          <ShareLogo />
        </ActionIcon>}  
    </FlexBox>
  )
}

export default ActionMenu
