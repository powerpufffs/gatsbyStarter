import React from 'react'
import styled from '@emotion/styled'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const SmallText = ({ftSize="12px", ...props}) => {
	const Text = styled.div`
		font-size: ${ftSize};
		color: gray;
		text-align: center;
	`
	return (
		<Text>
			{ props.children }
			<div css={css`font-weight: bold;`}>Reply HELP for help, Reply STOP to Cancel</div>
		</Text>
	)
}

export default SmallText
