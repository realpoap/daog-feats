
import player from '../data/master'

const PlayerSkills = ({ masters, setUserData }) => {

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
		setUserData(updatedList)
	}

	const handleClear = () => {
		console.log('removing local storage data');

		localStorage.removeItem('user_stats')
		setUserData(null)
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