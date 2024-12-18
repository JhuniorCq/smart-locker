import { ref, set } from "firebase/database";
import { INDICATORS, SECURITY_VALUES } from "../../utils/constants";
import "./Indicator.css";
import { dbReal } from "../../credentials";

export const Indicator = ({ type, value, min, max }) => {
  const closeDoor = async () => {
    const doorRef = ref(dbReal, "arduino/commands/closeDoor");

    try {
      await set(doorRef, true); // Enviamos el valor true a "closeDoor" en la BD
      console.log("Puerta cerrada correctamente.");
    } catch (error) {
      console.error("Error al cerrar la puerta.", error.message);
    }
  };

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
              value === SECURITY_VALUES.OPEN
                ? "indicator__open"
                : "indicator__close"
            }`}
          >
            El Smart Locker se encuentra {value}
          </div>
          {value === SECURITY_VALUES.OPEN && (
            <button className="indicator__close-button" onClick={closeDoor}>
              CERRAR
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};
