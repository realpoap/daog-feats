import ReactDOMServer from 'react-dom/server';
import { Tooltip } from 'react-tooltip'
import SVG from 'react-inlinesvg';

const Badge = ({ id, tooltip, icon, title, color, type, action, isActive }) => {
	const coloredClass = `badge ${color}`
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
		default:
			actionStyle = 'red'
	}



	return (
		<>
			<div
				className={isActive ? coloredClass : 'badge'}
				data-tooltip-id={id}
				data-tooltip-place='bottom'
				data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
					<>
						<h6 className='tooltip-title'>{title}</h6>
						<p className='tooltip-subtitle'>{type} - {action}</p>
						<p
							className='action-bubble'
							style={{ backgroundColor: actionStyle }}
						>{actionLetter}</p>
						<p className='tooltip-content'>{tooltip}</p>
					</>)}
			>
				<SVG
					className='icon'
					src={icon}
					title={title} />
				<div
					className='action-bubble'
					style={{ backgroundColor: actionStyle }}
				>
					{actionLetter}
				</div>
				<div
					className="circle">
				</div>
				<div
					className='ribbon'>
					{title}
				</div>
				<div>
					<Tooltip
						className='feat-tooltip'
						id={id}
					/>
				</div>
			</div >
		</>
	)
}

export default Badge;