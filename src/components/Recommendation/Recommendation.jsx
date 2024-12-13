import "./Recommendation.css";

export const Recommendation = ({ title, recommendations }) => {
  return (
    <div className="recommendation">
      <h2 className="recommendation__title">{title}</h2>
      <ul className="recommendation__list">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="recommendation__item">
            {recommendation}
          </li>
        ))}
      </ul>
    </div>
  );
};
