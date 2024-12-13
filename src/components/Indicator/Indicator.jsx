import { INDICATORS } from "../../utils/constants";
import "./Indicator.css";

export const Indicator = ({ type, value, min, max, open }) => {
  return (
    <div className="indicator">
      <h2 className="indicator__name">{type}:</h2>
      {type === INDICATORS.TEMPERATURE ? (
        <div className="indicator__box-type">
          <p className="indicator__value">{value}°C</p>
          <progress value={value} min={min} max={max}></progress>
        </div>
      ) : type === INDICATORS.HUMIDITY ? (
        <div className="indicator__box-type">
          <p className="indicator__value">{value}%</p>
          <progress value={value} min={min} max={max}></progress>
        </div>
      ) : type === INDICATORS.SECURITY ? (
        <div className="indicator__box-type">
          <div
            className={`indicator__security ${
              open ? "indicator__open" : "indicator__close"
            }`}
          >
            El Smart Locker se encuentra {open ? "ABIERTO" : "CERRADO"}
          </div>
          {open && <button className="indicator__close-button">CERRAR</button>}
        </div>
      ) : null}
    </div>
  );
};
