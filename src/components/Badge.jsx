import { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import SVG from 'react-inlinesvg';

const Badge = ({ id, tooltip, icon, title, rank, color }) => {

	console.log('icon:', icon);


	const [isActive, setIsActive] = useState(false)
	const coloredClass = `badge ${color}`

	const toggleClass = () => {
		//add skills count here - context
		setIsActive(!isActive)

	}
	return (
		<li
			className={isActive ? coloredClass : 'badge'}
			onClick={toggleClass}
			data-tooltip-id={id}
			data-tooltip-content={tooltip}
			data-tooltip-place='bottom'>
			<SVG className='icon' src={icon} width={128}
				height="auto"
				title={title} />
			<div className="circle">
			</div>
			<div className='ribbon'>
				{title}
			</div>
			<div>
				<Tooltip className='tooltip' id={id} />
			</div>
		</li>
	);
};

export default Badge;