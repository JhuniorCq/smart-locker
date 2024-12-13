import { useNavigate } from "react-router-dom";
import { AlertRecorded } from "../../components/AlertRecorded/AlertRecorded";
import { RECORDED_ALERTS } from "../../utils/constants";
import smartLockerBN from "../../assets/images/Smart Locker B_N.png";
import "./AlertHistory.css";

export const AlertHistory = () => {
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
          <button className="alert-history__option alert-history__option--clear">
            VACIAR
          </button>
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
