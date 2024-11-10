import BadgeRow from "./BadgeRow";

const BadgesGrid = ({ main, trees }) => {

	return Array.from(
		{ length: 6 },
		(_, i) => (
			<BadgeRow
				key={i}
				main={main}
				trees={trees}
				index={i} />
		)
	)
}

export default BadgesGrid

