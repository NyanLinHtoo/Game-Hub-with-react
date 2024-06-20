interface Props {
  score: number;
}
const CriticScores = ({ score }: Props) => {
  // Determine the color based on the score
  let bgColor, textColor;

  if (score > 75) {
    bgColor = "bg-green-100";
    textColor = "text-green-800";
  } else if (score > 50) {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-800";
  } else {
    bgColor = "bg-red-100";
    textColor = "text-red-800";
  }

  return (
    <div className="mr-3">
      <span
        className={`${bgColor} ${textColor} text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>
        {score}
      </span>
    </div>
  );
};

export default CriticScores;
