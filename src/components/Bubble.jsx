import { useContext } from "react";
import { LanguageContext } from "../store/languageContext";
import { percentage, setProperty } from "../utils";

const Bubble = ({ name, current, max, color }) => {
  const { playerInfo, setPlayerInfo } = useContext(LanguageContext);

  const style = {
    background: `linear-gradient(transparent ${
      100 - percentage(current, max)
    }%, ${color} ${100 - percentage(current, max)}%)`,
  };

  return (
    <div className="bubble-container">
      <div className="bubble" />
      <div className="circle-overlay" />
      <div className="circle-fill" style={style} />
      <div className="circle-fill-text">
        <input
          className="circle-input"
          type="number"
          inputMode="numeric"
          name={name}
          value={current}
          max={playerInfo[name].max}
          onChange={(e) =>
            setPlayerInfo(
              setProperty(playerInfo, `${name}.current`, e.target.value),
            )
          }
        />
      </div>
    </div>
  );
};

export default Bubble;
