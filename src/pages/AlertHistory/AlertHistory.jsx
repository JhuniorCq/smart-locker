import { useNavigate } from "react-router-dom";
import { AlertRecorded } from "../../components/AlertRecorded/AlertRecorded";
import { useContext } from "react";
import { RecordedAlertsContext } from "../../context/RecordedAlerts/RecordedAlertsContext";
import smartLockerBN from "../../assets/images/Smart Locker B_N.png";
import "./AlertHistory.css";

export const AlertHistory = () => {
  const { RECORDED_ALERTS } = useContext(RecordedAlertsContext);

  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <section className="alert-history">
      <div className="alert-history__content">
        <img
          src={smartLockerBN}
          alt="Smart Locker"
          className="alert-history__logo"
        />
        <h1 className="alert-history__title">ALERTAS REGISTRADAS</h1>
        <ul className="alert-history__list">
          {RECORDED_ALERTS.map((alert) => (
            <AlertRecorded
              key={alert.id}
              id={alert.id}
              name={alert.name}
              date={alert.date}
            />
          ))}
        </ul>

        <div className="alert-history__options">
          <button
            className="alert-history__option alert-history__option--back"
            onClick={back}
          >
            ATRÁS
          </button>
        </div>
      </div>
    </section>
  );
};
