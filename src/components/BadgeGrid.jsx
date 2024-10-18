import Badge from "./Badge"

const BadgesGrid = ({ tree }) => {
	console.log('data content:', tree.content);

	const badgesList = tree.content.map(f =>
		<Badge
			key={`#${f.rank}-${f.id}`}
			id={f.id}
			rank={f.rank}
			title={f.title}
			tooltip={f.tooltip}
			icon={f.icon}
		/>
	)

	return (
		<div className='tree-column'>
			<h3>{tree.name}</h3>
			<ul className='list'>{badgesList}</ul>
		</div>
	)
}

export default BadgesGrid
