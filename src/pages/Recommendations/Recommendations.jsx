import { useNavigate } from "react-router-dom";
import { Recommendation } from "../../components/Recommendation/Recommendation";
import "./Recommendations.css";
import { RECOMMENDATIONS } from "../../utils/constants";

export const Recommendations = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <section className="recommendations">
      <div className="recommendations__content">
        <h1 className="recommendations__title">RECOMENDACIONES</h1>
        <ul className="recommendations__list">
          {RECOMMENDATIONS.map((recommendation) => (
            <Recommendation
              key={recommendation.id}
              title={recommendation.name}
              recommendations={recommendation.recommendations}
            />
          ))}
        </ul>
        <button className="recommendations__back-button" onClick={back}>
          ATRÁS
        </button>
      </div>
    </section>
  );
};
