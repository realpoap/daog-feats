import BadgeRow from "./BadgeRow";

const BadgesGrid = ({ trees }) => {

	return Array.from(
		{ length: 6 },
		(_, i) => (
			<BadgeRow
				key={i}
				trees={trees}
				index={i} />
		)
	)
}

export default BadgesGrid

