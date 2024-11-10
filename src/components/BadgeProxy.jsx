import SVG from 'react-inlinesvg';
import padlock from '../assets/svg/plain-padlock.svg'

const BadgeProxy = ({ action }) => {
	const actionLetter = action.substr(0, 1)
	let actionStyle = ''
	switch (actionLetter) {
		case 'f':
			actionStyle = "lightgreen"
			break
		case 'g':
			actionStyle = "lightgreen"
			break
		case 'l':
			actionStyle = "LightSkyBlue"
			break
		case 'm':
			actionStyle = "SandyBrown"
			break
		case 'p':
			actionStyle = "SandyBrown"
			break
		case 'x':
			actionStyle = "darkGrey"
			break
		default:
			actionStyle = 'red'
	}

	return (
		<>
			<div className={'badge grey'}>

				<SVG className='icon' src={padlock} width={'128px'}
					height="auto"
				/>
				{/* <div className='action-bubble' style={{ backgroundColor: actionStyle }}>
					{actionLetter}
				</div> */}
			</div >
		</>
	)
}

export default BadgeProxy;