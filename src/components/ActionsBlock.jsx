import { useContext } from 'react';
import Collapsible from 'react-collapsible';
import { LanguageContext } from '../store/languageContext';

function ActionsBlock({ type, list, action, number, useAction }) {
	const { playerInfo, setPlayerInfo } = useContext(LanguageContext)
	return (
		<div>
			<h2>{type}s <input
				type='number'
				inputMode='numeric'
				min={0}
				value={number}
				onChange={(e) => setPlayerInfo({ ...playerInfo, [action]: e.target.value })}
			/>
				<button
					id='use-main'
					name={action}
					className='action-btn'
					onClick={useAction}>
					Use 1
				</button></h2>
			{list
				.filter(e => e.action === type)
				.sort((a, b) => {
					const nameA = a.title.toUpperCase()
					const nameB = b.title.toUpperCase()

					if (nameA < nameB) { return -1 }
					if (nameA > nameB) { return 1 }
					return 0
				})
				.map((e, i) =>
					<li key={`${i}-action-${e.title}`}>
						<div>
							<span
								className={`action ${e.color}`}>
							</span>
						</div>
						<Collapsible trigger={e.title} transitionTime={50} lazyRender={true}>
							<p className='tooltip-subtitle'>{e.type} - {e.action}</p>
							<p className='tooltip-content'>{e.tooltip}</p>
						</Collapsible>
					</li>
				)
			}
		</div>
	)
}

export default ActionsBlock