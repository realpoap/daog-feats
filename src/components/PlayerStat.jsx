import { useState } from "react";

const PlayerStat = ({ stat }) => {
	const [inputValue, setInputValue] = useState(0)
	//setInputValue(stat.value)

	return (
		<>
			{stat.skill}:
			<input
				type={"number"}
				min={0}
				max={5}
				name={stat.skill}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)} />
		</>
	);
};

export default PlayerStat;
