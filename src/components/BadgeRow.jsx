import { useState } from "react";

import Badge from "./Badge";
const BadgeRow = ({ trees, index }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	console.log(trees);
	if (index === 0) {
		return (
			<div className='title-row'>
				{trees.map(t => <h6 className="skill-title" key={t.name}>{t.name}</h6>)}
			</div>
		)
	}

	return (
		<div className="skill-row">
			<h4 className="index">{index}</h4>
			<div className='tree-row'>
				{trees.map((t, x) => {
					console.log('index', index);

					const skill = t.content[index - 1]
					console.log('skill', skill);

					return (
						<div
							key={skill.title}
							className="skill"
							onClick={() => setActiveIndex(x + 1)}>
							<Badge
								id={`tooltip-${skill.title}`}
								title={skill.title}
								icon={skill.icon}
								rank={skill.rank}
								tooltip={skill.tooltip}
								color={skill.color}
								isActive={activeIndex === x + 1}
							/>
						</div>
					)
				})}
			</div>
		</div>
	);
};

export default BadgeRow;

