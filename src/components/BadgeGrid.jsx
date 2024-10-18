import BadgeRow from "./BadgeRow";

const BadgesGrid = ({ tree }) => {
	console.log('data content:', tree);
	// const badgesList = tree.content.map(f =>
	// 	<Badge
	// 		key={`#${f.rank}-${f.id}`}
	// 		id={f.id}
	// 		rank={f.rank}
	// 		title={f.title}
	// 		tooltip={f.tooltip}
	// 		icon={f.icon}
	// 		color={f.color}
	// 	/>
	// )

	return (
		<BadgeRow />
	)
}

export default BadgesGrid
