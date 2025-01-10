function FinishScreen({ points, maxPossiblepoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblepoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage < 100 && percentage > 60) emoji = "🥈";
  if (percentage <= 60 && percentage >= 40) emoji = "🥉";
  if (percentage < 40) emoji = "💩";
  return (
    <>
      <p className="result">
        {emoji} You Scored <strong>{points}</strong> out of {maxPossiblepoints}{" "}
        ({Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">(HighScore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        RESET
      </button>
    </>
  );
}

export default FinishScreen;
