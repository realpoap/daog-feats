import { useState, useContext } from "react";
import { LanguageContext } from "../store/languageContext"

import Badge from "./Badge";
import BadgeProxy from "./BadgeProxy";


const BadgeRow = ({ main, trees, index }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { playerMasters } = useContext(LanguageContext)
	const { playerInfo, setPlayerInfo } = useContext(LanguageContext)

	const checkPossibleSkill = (skills) => {
		if (skills.some((e) => e.attackType === playerInfo.attackType)) {
			const filteredSkill = skills.find((e) => e.attackType === playerInfo.attackType)
			return filteredSkill
		} else {
			return skills
		}

	}

	const handleClick = (event) => {
		// value of index
		const value = event.currentTarget.value
		let prunedArray = playerInfo.feats

		const maxCount = playerInfo.level
		console.log(prunedArray.length, '/', maxCount);


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

		if (prunedArray.length <= maxCount) {
			setPlayerInfo({ ...playerInfo, feats: prunedArray })
			isSelected ? setActiveIndex(0) : setActiveIndex(value)
		} else {
			window.alert(`You need to level up (max = ${maxCount}).`)
		}

	}
	// if first row of table (index 0 of array), write title
	if (index === 0) {
		console.log(index);

		return (
			<div className='title-row'>
				{trees.map(t => <h6 className="skill-title" key={t.name}>{t.name}</h6>)}
			</div>
		)
	} else {

		return (
			<div className="skill-row">
				<h4 className="index">{index}</h4>
				<div className='tree-row'>
					{trees.map((t, x) => {


						let skill = {}
						// if there is a skill with an attackType, make sure there is only the one we need
						if (t.content.some(e => e.attackType)) {
							console.log('attackTypes exists');
							
								
							const filteredContent = t.content.filter(e => !e.attackType || e.attackType === playerInfo.attackType)
							console.log('filtered content', filteredContent);
							skill = filteredContent.find(e => e.rank === index)
							
						} else { // else don't bother
							skill = t.content[index - 1]
						}

						// if does not have enough skills in this mastering, return blocked badge
						if (!skill || skill.rank === undefined  || skill.rank > playerMasters[skill.type] || skill.rank > playerMasters[main]) {
							return (
								<li
									key={`skill-${main}-${t.name}.${index}`}
									className="skill"
								>
									<BadgeProxy
										id={`tooltip-${main}-${t.name}.${index}`}
										action={'x'}
									/>
								</li>
							)
						} else {
							return (
								<li
									className="skill"

									key={`key-${skill.title}-${index}`}
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
					}
					)}
				</div>
			</div >
		);
	}

};

export default BadgeRow;

