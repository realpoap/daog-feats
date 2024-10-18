import { useState } from "react";

import Badge from "./Badge";
const BadgeRow = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='tree-row' >
			<h4>1</h4>
			<div onClick={() => setActiveIndex(1)} >
				<Badge
					id='sgergthteh'
					title='truc'
					icon=''
					rank={1}
					tooltip='tooltippppppp'
					color='green'
					isActive={activeIndex === 1}
				/>
			</div>
			<div onClick={() => setActiveIndex(2)}>
				<Badge
					id='sgerggregrtgthteh'
					title='truc'
					icon=''
					rank={1}
					tooltip='teththrstyhppppp'
					color='green'
					isActive={activeIndex === 2}
				/>
			</div>
			<div onClick={() => setActiveIndex(3)}>
				<Badge
					id='sgergtreqqhteh'
					title='truc'
					icon=''
					rank={1}
					tooltip='toolegethetippppppp'
					color='green'
					isActive={activeIndex === 3}
				/>
			</div>
		</div>
	);
};

export default BadgeRow;