import { useState } from 'react';
//import player from '../data/master-fr'

const PlayerSkills = ({ userData, setUserData }) => {
	// const [playerSkillList, setPlayerSkillList] = useState({
	// 	artisanat: 0,
	// 	combat: 0,
	// 	défense: 0,
	// 	détection: 0,
	// 	discrétion: 0,
	// 	éloquence: 0,
	// 	ésoterisme: 0,
	// 	logique: 0,
	// 	magie: 0,
	// 	minutie: 0,
	// 	mouvement: 0,
	// 	négoce: 0,
	// 	perception: 0,
	// 	performance: 0,
	// 	persuasion: 0,
	// 	physique: 0,
	// 	savoir: 0,
	// 	sciences: 0,
	// 	soin: 0,
	// 	survie: 0,
	// 	tir: 0,
	// })

	const propertiesEntries = Object.entries(userData)
	//console.log(propertiesEntries);

	const handleChange = (e) => {
		e.preventDefault()
		const name = e.target.name
		const value = e.target.value
		propertiesEntries.map(p => {
			if (p[0] === name) {
				p[1] = parseInt(value)
			}
		})
		const updatedList = Object.fromEntries(propertiesEntries)
		setUserData(updatedList)
		localStorage.setItem('user-stats', JSON.stringify(updatedList))
	}

	const handleClear = () => {
		console.log('removing local storage data');

		localStorage.removeItem('user-stats')
		userData({})
	}


	return (
		<div className='player-block'>
			{
				propertiesEntries.map(p => {
					return (
						<label key={p[0]}>
							{p[0]}
							<input
								type='number'
								name={p[0]}
								min={0}
								value={p[1]}
								onChange={e => handleChange(e)}
							/>
						</label>
					)
				})
			}
			<label>

				<button className='language-btn' onClick={handleClear} name='clear-btn'>Clear</button>
			</label>
		</div >
	);
};

export default PlayerSkills;