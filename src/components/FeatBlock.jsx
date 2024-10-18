import BadgeGrid from './BadgeGrid'

const FeatBlock = ({ title, tree }) => {
	return (
		<div className='main-wrapper'>
			<h2>{title}</h2>
			<div className='tree-block'>
				<BadgeGrid
					tree={tree} />
			</div>
		</div>
	);
};

export default FeatBlock;