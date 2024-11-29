import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../store/languageContext";
import { setProperty } from "../utils";

const StatBlock = ({ masters, setUserData }) => {
  const { playerInfo, setPlayerInfo } = useContext(LanguageContext);
  const [healthMax, setHealthMax] = useState(0);
  const [spiritMax, setSpiritMax] = useState(0);

  useEffect(() => {
    setHealthMax(playerInfo.health.max);
    setSpiritMax(playerInfo.spirit.max);
  }, [playerInfo]);

  const propertiesEntries = Object.entries(masters);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    propertiesEntries.map((p) => {
      if (p[0] === name) {
        p[1] = parseInt(value);
      }
    });
    const updatedList = Object.fromEntries(propertiesEntries);
    console.log(updatedList);

    localStorage.setItem("user_stats", JSON.stringify(updatedList));
    localStorage.setItem("user_info", JSON.stringify(playerInfo));
    setUserData(updatedList);
  };

  const handleClear = () => {
    console.log("removing local storage data");

    localStorage.removeItem("user_stats");
    let user = JSON.parse(localStorage.getItem("user_info"));
    user.attackType = "";
    localStorage.setItem("user_info", JSON.stringify(user));
    setUserData(null);
  };

  const handleMaxChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = Number(e.target.value);
    console.log(`max ${name} changed`);
    const updatedMaxObject = setProperty(playerInfo, `${name}.max`, value);
    //console.log('updated', updatedMaxObject);

    setPlayerInfo(updatedMaxObject);
  };

  return (
    <div id="stat-block">
      {/* attack type */}
      <div className="attack-type">
        <p>Attaque avec</p>
        <label>
          AGI
          <input
            type="radio"
            name="attack"
            value="AGI"
            checked={playerInfo.attackType === "AGI"}
            onChange={(e) =>
              setPlayerInfo({ ...playerInfo, attackType: e.target.value })
            }
          />
        </label>
        <label>
          FOR
          <input
            type="radio"
            name="attack"
            value="FOR"
            checked={playerInfo.attackType === "FOR"}
            onChange={(e) =>
              setPlayerInfo({ ...playerInfo, attackType: e.target.value })
            }
          />
        </label>
      </div>
      <div className="attack-type">
        <label>
          Vie
          <input
            className="player-block-label-input"
            type="number"
            inputMode="numeric"
            name="health"
            value={healthMax}
            onChange={handleMaxChange}
          />
        </label>
        <label>
          Esprit
          <input
            className="player-block-label-input"
            type="number"
            inputMode="numeric"
            name="spirit"
            value={spiritMax}
            onChange={handleMaxChange}
          />
        </label>
      </div>
      {/* table of stats */}
      <div className="player-block">
        {propertiesEntries.map((p) => {
          return (
            <label key={p[0]}>
              <span>{p[0]}</span>
              <input
                type="number"
                inputMode="numeric"
                name={p[0]}
                min={0}
                max={5}
                value={p[1]}
                onChange={(e) => handleChange(e)}
              />
            </label>
          );
        })}
      </div>
      <button
        id="clear"
        className="action-btn"
        onClick={handleClear}
        name="clear-btn"
      >
        Clear
      </button>
    </div>
  );
};

export default StatBlock;
