import BadgeGrid from './BadgeGrid'

const FeatBlock = ({ title, trees }) => {
	return (
		<div className='main-wrapper'>
			<div className='tree-block'>
				<h2>{title}</h2>
				<BadgeGrid
					trees={trees} />
			</div>
		</div>
	);
};

export default FeatBlock;