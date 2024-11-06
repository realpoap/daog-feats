import { useState } from 'react';
//import player from '../data/master-fr'

const PlayerSkills = () => {
	const [playerSkillList, setPlayerSkillList] = useState({
		artisanat: 0,
		combat: 0,
		défense: 0,
		détection: 0,
		discrétion: 0,
		éloquence: 0,
		ésoterisme: 0,
		logique: 0,
		magie: 0,
		minutie: 0,
		mouvement: 0,
		négoce: 0,
		perception: 0,
		performance: 0,
		persuasion: 0,
		physique: 0,
		savoir: 0,
		sciences: 0,
		soin: 0,
		survie: 0,
		tir: 0,
	})

	const properties = Object.keys(playerSkillList)
	console.log(properties);

	const handleChange = (e) => {
		for (const prop in playerSkillList) {
			if (prop === e.target.name) {
				playerSkillList.prop = e.target.value
				console.log(`🚀 ~ ${prop}: ${playerSkillList.prop}`)
			}
		}
	}

	return (
		<div className='player-block'>
			{
				properties.map(p => {
					return (
						<label key={p}>
							{p}
							<input
								type='number'
								name={p}
								min={0}
								defaultValue={0}
								onChange={handleChange}
							/>
						</label>
					)
				})
			}
		</div >
	);
};

export default PlayerSkills;