import { useNavigate, useParams } from "react-router-dom";
import smartLockerBN from "../../assets/images/Smart Locker B_N.png";
import "./AlertDetails.css";
import { INDICATORS, SECURITY_VALUES } from "../../utils/constants";
import { Indicator } from "../../components/Indicator/Indicator";
import { useContext } from "react";
import { RecommendationsContext } from "../../context/RecommendationsContext/RecommendationsContext";
import { RecordedAlertsContext } from "../../context/RecordedAlerts/RecordedAlertsContext";

export const AlertDetails = () => {
  const { RECOMMENDATIONS } = useContext(RecommendationsContext);
  const { RECORDED_ALERTS } = useContext(RecordedAlertsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(RECORDED_ALERTS, "RECORDED_ALERTS");
  console.log(RECOMMENDATIONS);

  const recordedAlert = RECORDED_ALERTS.find(
    (recordedAlert) => recordedAlert.id === id
  );

  console.log(recordedAlert);

  const alertRecommendations = RECOMMENDATIONS.find(
    (recommendation) => recordedAlert.idRecommendation === recommendation.id
  );

  console.log(alertRecommendations);

  const back = () => {
    navigate(-1);
  };

  return (
    <section className="alert-details">
      <div className="alert-details__content">
        <img
          src={smartLockerBN}
          alt="Smart Locker"
          className="alert-details__logo"
        />
        <h1 className="alert-details__title">DETALLES DE LA ALERTA</h1>
        <div className="alert-details__details-box">
          <div className="alert-details__details">
            <p className="alert-details__type">NOMBRE: </p>
            <p>{recordedAlert.name}</p>
          </div>
          <div className="alert-details__details">
            <p className="alert-details__type">FECHA: </p>
            <p>{recordedAlert.date}</p>
          </div>
          <div className="alert-details__details">
            <p className="alert-details__type">HORA: </p>
            <p>{recordedAlert.time}</p>
          </div>
          <div>
            <p className="alert-details__type">DETALLES: </p>
            <div className="alert-details__indicators">
              <Indicator
                type={INDICATORS.TEMPERATURE}
                min={0}
                max={200}
                value={recordedAlert.temperature}
              />
              <Indicator
                type={INDICATORS.HUMIDITY}
                min={0}
                max={100}
                value={recordedAlert.humidity}
              />
              <div className="alert-details__security">
                <h2 className="alert-details__security-name">
                  {INDICATORS.SECURITY}
                </h2>
                <p
                  className={`alert-details__security-value ${
                    recordedAlert.security === SECURITY_VALUES.OPEN
                      ? "alert-details__security-value--open"
                      : recordedAlert.security === SECURITY_VALUES.CLOSE
                      ? "alert-details__security-value--close"
                      : ""
                  }`}
                >
                  {recordedAlert.security}
                </p>
              </div>
            </div>
          </div>
          <ul className="alert-details__recommendations">
            {alertRecommendations.recommendations.map(
              (recommendation, index) => (
                <li key={index}>{recommendation}</li>
              )
            )}
          </ul>
        </div>
        <div className="alert-details__options">
          <button className="alert-details__option alert-details__option--delete">
            BORRAR
          </button>
          <button
            className="alert-details__option alert-details__option--back"
            onClick={back}
          >
            ATRÁS
          </button>
        </div>
      </div>
    </section>
  );
};
