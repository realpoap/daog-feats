import BadgeRow from "./BadgeRow";

const BadgesGrid = ({ main, trees }) => {

	return Array.from(
		{ length: 6 },
		(_, i) => (
			<BadgeRow
				key={`badgerow-${i}`}
				main={main}
				trees={trees}
				index={i} />
		)
	)
}

export default BadgesGrid

