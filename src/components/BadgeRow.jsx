import { useState, useContext } from "react";
import { LanguageContext } from "../store/languageContext"

import Badge from "./Badge";
import BadgeProxy from "./BadgeProxy";


const BadgeRow = ({ main, trees, index }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { playerMasters } = useContext(LanguageContext)
	const { playerInfo, setPlayerInfo } = useContext(LanguageContext)

	if (index === 0) {
		return (
			<div className='title-row'>
				{trees.map(t => <h6 className="skill-title" key={t.name}>{t.name}</h6>)}
			</div>
		)
	}

	const handleClick = (event) => {
		// value of index
		const value = event.currentTarget.value
		let prunedArray = playerInfo.feats

		const maxCount = playerInfo.level
		console.log(prunedArray.length - 1, '/', maxCount);


		// properties of selected feat
		const object = {
			theme: event.currentTarget.getAttribute('data-theme'),
			title: event.currentTarget.getAttribute('data-title'),
			type: event.currentTarget.getAttribute('data-type'),
			rank: event.currentTarget.getAttribute('data-rank'),
			color: event.currentTarget.getAttribute('data-color'),
			action: event.currentTarget.getAttribute('data-action'),
			tooltip: event.currentTarget.getAttribute('data-tooltip')
		}
		//console.log(object.title, '|', object.type, '|', object.rank);

		const existOnArray = playerInfo.feats.some((e) => e.title === object.title)
		const isSelected = activeIndex === value
		console.log('exist on array:', existOnArray, '| already selected:', isSelected, '| theme:', object.theme)

		// if newly selected, delete all other inputs in that slot
		if (!isSelected && !existOnArray) {
			prunedArray = prunedArray.filter(i => (i.theme !== object.theme || i.rank !== object.rank))
			prunedArray.push(object)
		}
		// if was not selected but already existed (bug fix case)
		if (!isSelected && existOnArray) {
			prunedArray = prunedArray.filter(i => i.title !== object.title)
			//console.log('because exists, removed:', prunedArray);
		}
		// clear that title if is already selected and in array
		if (isSelected && existOnArray) {
			prunedArray = prunedArray.filter(i => i.title !== object.title)
			//console.log('because exists, removed:', prunedArray);
		}

		if (prunedArray.length - 1 <= maxCount) {
			setPlayerInfo({ ...playerInfo, feats: prunedArray })
			isSelected ? setActiveIndex(0) : setActiveIndex(value)
		} else {
			window.alert(`You need to level up (max = ${maxCount}).`)
		}

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
							>
								<BadgeProxy
									id={`tooltip-${skill.title}`}
									action={'x'}
								/>
							</li>
						)
					} else {

						return (
							<li
								className="skill"

								key={`key-${skill.title}`}
								value={x + 1}
								onClick={handleClick}
								data-theme={main}
								data-title={skill.title}
								data-type={skill.type}
								data-color={skill.color}
								data-rank={skill.rank}
								data-action={skill.action}
								data-tooltip={skill.tooltip}
							>
								<Badge
									id={`badge-${skill.title}`}
									className="skill"
									title={skill.title}
									icon={skill.icon}
									rank={skill.rank}
									tooltip={skill.tooltip}
									color={skill.color}
									type={skill.type}
									action={skill.action}
									isActive={
										activeIndex === x + 1 || (playerInfo.feats.some((e) => e.title === skill.title) && activeIndex !== x + 1)}
								/>
							</li>
						)
					}
				})}
			</div>
		</div >
	);
};

export default BadgeRow;

