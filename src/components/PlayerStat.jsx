import { useState } from "react";

const PlayerStat = ({ stat }) => {
	const [inputValue, setInputValue] = useState(0)

	return (
		<div>
			{stat.skill}:
			<input
				type={"number"}
				min={0}
				max={5}
				name={stat.skill}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)} />
		</div>
	);
};

export default PlayerStat;
