import { useState } from 'react'
import { Tooltip } from 'react-tooltip'


const Badge = ({ id, tooltip, icon, title, rank, color }) => {

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

			<div>
				<div className="circle">
					<div className='icon'>
						<i className={`${icon} ra-fw`}></i>
					</div>
				</div>
				<div className='ribbon'>
					{title}
				</div>
				<Tooltip className='tooltip' id={id} />
			</div>
		</li>
	);
};

export default Badge;