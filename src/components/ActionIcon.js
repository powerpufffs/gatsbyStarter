import React from 'react'
import styled from '@emotion/styled'
import { Ring } from '../../public/icons/Icons'
import { CenterAbsolute } from '../Helpers/Tools'

const Container = styled.button`
	position: relative;
	border: none;
	background-color: transparent;
	&:hover {
		transform: scale(1.1);
		filter: brightness(110%);
	}
`
const ActionIcon = ({ className, children, onSelect }) => {
	return (
		<Container className="className" onClick={onSelect}>
			<svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<g id="Review-3" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
					<g id="Redemption-Main" transform="translate(-69.000000, -660.000000)" stroke="#EA535D" strokeWidth={3}>
						<g id="Call-Store-Copy" transform="translate(71.000000, 662.000000)">
						<circle id="Oval" cx={25} cy={25} r={25} />
						</g>
					</g>
				</g>
			</svg>
			<CenterAbsolute>
				{ children }
			</CenterAbsolute>
		</Container>
	)
}

export default ActionIcon
