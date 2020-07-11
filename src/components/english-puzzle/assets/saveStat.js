import updateGameStatistics from "../../../services/updateGameStatistics";

async function saveStat(dispatchGame, stateGame) {
  const date = String(new Date().toLocaleString('ru-RU')).slice(0, -3);
  const resultToSave = {
    know: stateGame.results.know.length,
    notKnow: stateGame.results.notKnow.length,
  };
  const stat = [...stateGame.statistics, { date, result: resultToSave } ];
  dispatchGame({ type: 'updateStatistics', value: stat });
  // get statistic from back, update it, then send back
  updateGameStatistics({
    gameName: 'puzzle',
    date,
    statistics: stat,
  });
}

export default saveStat;
