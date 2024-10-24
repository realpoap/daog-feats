import { Tooltip } from 'react-tooltip'
import SVG from 'react-inlinesvg';

const Badge = ({ id, tooltip, icon, title, color, isActive }) => {
	const coloredClass = `badge ${color}`

	return (
		<>
			<div
				className={isActive ? coloredClass : 'badge'}
				data-tooltip-id={id}
				data-tooltip-content={tooltip}
				data-tooltip-place='bottom' >
				<SVG className='icon' src={icon} width={128}
					height="auto"
					title={title} />
				<div className="circle">
				</div>
				<div className='ribbon'>
					{title}
				</div>
				<div>
					<Tooltip className='feat-tooltip' id={id} />
				</div>
			</div>
		</>
	)
}

export default Badge;