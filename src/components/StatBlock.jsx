import { useContext } from "react";
import { LanguageContext } from "../store/languageContext";

const StatBlock = ({ masters, setUserData }) => {

	const { playerInfo, setPlayerInfo } = useContext(LanguageContext)


	const propertiesEntries = Object.entries(masters)

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
		console.log(updatedList);

		localStorage.setItem('user_stats', JSON.stringify(updatedList))
		localStorage.setItem('user_info', JSON.stringify(playerInfo))
		setUserData(updatedList)
	}

	const handleClear = () => {
		console.log('removing local storage data');

		localStorage.removeItem('user_stats')
		let user = JSON.parse(localStorage.getItem('user_info'))
		user.attackType = ''
		localStorage.setItem('user_info', JSON.stringify(user))
		setUserData(null)
	}

	return (
		<div className='player-block'>
			<div className="attack-type">
				Attaque avec
				<label>
					AGI
					<input
						type='radio'
						name="attack"
						value='AGI'
						checked={playerInfo.attackType === 'AGI'}
						onChange={(e) => setPlayerInfo({ ...playerInfo, attackType: e.target.value })}
					/>
				</label>
				<label>
					FOR
					<input
						type='radio'
						name="attack"
						value='FOR'
						checked={playerInfo.attackType === 'FOR'}
						onChange={(e) => setPlayerInfo({ ...playerInfo, attackType: e.target.value })}
					/>
				</label>
			</div>
			{
				propertiesEntries.map(p => {
					return (
						<label key={p[0]}>
							<span>{p[0]}</span>
							<input
								inputMode='decimal'
								type='number'
								name={p[0]}
								min={0}
								max={5}
								value={p[1]}
								onChange={e => handleChange(e)}
							/>
						</label>
					)
				})
			}
			<label>

				<button id='clear' className='action-btn' onClick={handleClear} name='clear-btn'>Clear</button>
			</label>
		</div >
	);
};

export default StatBlock;
