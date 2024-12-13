import { useNavigate, useParams } from "react-router-dom";
import smartLockerBN from "../../assets/images/Smart Locker B_N.png";
import "./AlertDetails.css";
import {
  INDICATORS,
  RECOMMENDATIONS,
  RECORDED_ALERTS,
} from "../../utils/constants";
import { Indicator } from "../../components/Indicator/Indicator";

export const AlertDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recordedAlert = RECORDED_ALERTS.find(
    (recordedAlert) => recordedAlert.id === Number(id)
  );

  console.log(recordedAlert);

  const alertRecommendations = RECOMMENDATIONS.find(
    (recommendation) => recordedAlert.idRecommendation === recommendation.id
  );

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
        <h1 className="alert-details__title">DETALLES DE LA ALERTA N°{id}</h1>
        <div className="alert-details__details-box">
          <div>
            <p className="alert-details__type">NOMBRE: </p>
            <p>{recordedAlert.name}</p>
          </div>
          <div>
            <p className="alert-details__type">FECHA: </p>
            <p>{recordedAlert.date}</p>
          </div>
          <div>
            <p className="alert-details__type">HORA: </p>
            <p>{recordedAlert.time}</p>
          </div>
          <div>
            <p>DETALLES: </p>
            <div>
              <Indicator
                type={INDICATORS.TEMPERATURE}
                min={0}
                max={200}
                value={25}
              />
              <Indicator
                type={INDICATORS.HUMIDITY}
                min={0}
                max={100}
                value={45}
              />
            </div>
          </div>
          <ul>
            {alertRecommendations.recommendations.map((recommendation) => (
              <li>{recommendation}</li>
            ))}
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
