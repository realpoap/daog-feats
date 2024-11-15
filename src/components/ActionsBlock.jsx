import Collapsible from 'react-collapsible';

function ActionsBlock({ type, list }) {
	return (
		<div>
			<h2>{type}s</h2>
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