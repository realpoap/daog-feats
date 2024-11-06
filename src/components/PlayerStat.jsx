import { useState } from "react";

const PlayerStat = ({ stat, setProxySkillValue }) => {
	const [inputValue, setInputValue] = useState(0)
	//setInputValue(stat.value)

	return (
		<>
			{stat.skill}:
			<input
				type={"number"}
				min={0}
				name={stat.skill}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)} />
		</>
	);
};

export default PlayerStat;