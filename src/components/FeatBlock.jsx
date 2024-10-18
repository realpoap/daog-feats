import BadgeGrid from './BadgeGrid'
import ranged from '../data/ranged'

const FeatBlock = ({ title }) => {
	console.log('tree:', ranged.shooting)
	return (
		<div className='main-wrapper'>
			<h2>{title}</h2>
			<div className='tree-block'>
				<BadgeGrid className='grid-container' tree={ranged.shooting} />
			</div>
		</div>
	);
};

export default FeatBlock;