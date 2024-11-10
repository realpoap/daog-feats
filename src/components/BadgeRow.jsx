import { useState, useContext } from "react";
import { LanguageContext } from "../store/languageContext"

import Badge from "./Badge";
const BadgeRow = ({ main, trees, index }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { playerMasters, setPlayerMasters } = useContext(LanguageContext)

	const mainCategory = trees[1]


	if (index === 0) {
		return (
			<div className='title-row'>
				{trees.map(t => <h6 className="skill-title" key={t.name}>{t.name}</h6>)}
			</div>
		)
	}

	const handleClick = (event) => {
		const value = event.currentTarget.value
		activeIndex === value ? setActiveIndex(0) : setActiveIndex(value)
	}

	return (
		<div className="skill-row">
			<h4 className="index">{index}</h4>
			<div className='tree-row'>
				{trees.map((t, x) => {

					const skill = t.content[index - 1]
					if (skill.rank > playerMasters[skill.type] || skill.rank > playerMasters[main]) {
						return (
							<li
								key={`skill-${skill.title}`}
								className="skill"
								value={x + 1}
								onClick={handleClick}
							>
								<Badge
									id={`tooltip-${skill.title}`}
									title={''}
									icon={''}
									rank={''}
									tooltip={''}
									color={'grey'}
									type={''}
									action={''}
									isActive={false}
								/>
							</li>
						)
					} else {

						return (
							<li
								key={`skill-${skill.title}`}
								className="skill"
								value={x + 1}
								onClick={handleClick}
							>
								<Badge
									id={`tooltip-${skill.title}`}
									title={skill.title}
									icon={skill.icon}
									rank={skill.rank}
									tooltip={skill.tooltip}
									color={skill.color}
									type={skill.type}
									action={skill.action}
									isActive={activeIndex === x + 1}
								/>
							</li>
						)
					}
				})}
			</div>
		</div>
	);
};

export default BadgeRow;

