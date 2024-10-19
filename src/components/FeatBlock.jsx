import BadgeGrid from './BadgeGrid'

const FeatBlock = ({ title, trees }) => {
	return (
		<div className='main-wrapper'>
			<h2>{title}</h2>
			<div className='tree-block'>
				<BadgeGrid
					trees={trees} />
			</div>
		</div>
	);
};

export default FeatBlock;