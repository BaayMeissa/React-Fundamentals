import "./Player"
import players from "../players"
import Joueur from "./Player"


const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {players.map((player, index) => (
        <Joueur key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;