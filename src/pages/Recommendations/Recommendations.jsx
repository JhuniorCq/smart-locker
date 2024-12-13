import { useNavigate } from "react-router-dom";
import { Recommendation } from "../../components/Recommendation/Recommendation";
import "./Recommendations.css";

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
          <Recommendation
            title="TEMPERATURA ALTA"
            recommendations={[
              "Coloque el locker en un lugar más fresco y bien ventilado.",
              "Evite exponer el locker a la luz solar directa.",
            ]}
          />
          <Recommendation
            title="TEMPERATURA BAJA"
            recommendations={[
              "Mantenga el locker alejado de corrientes de aire frío.",
              "Asegúrese de que el lugar esté a temperatura ambiente.",
            ]}
          />
          <Recommendation
            title="HUMEDAD ALTA"
            recommendations={[
              "Coloque un desecante dentro del locker para absorber humedad.",
              "Evite almacenar objetos sensibles a la humedad.",
            ]}
          />
          <Recommendation
            title="HUMEDAD BAJA"
            recommendations={[
              "Mantenga el locker alejado de corrientes de aire frío.",
              "Asegúrese de que el lugar esté a temperatura ambiente.",
            ]}
          />
          <Recommendation
            title="INTRUSIÓN DETECTADA"
            recommendations={[
              "Revise el contenido del locker de inmediato.",
              "Considere cambiar la ubicación del locker.",
            ]}
          />
          <Recommendation
            title="ESTADO SEGURO"
            recommendations={[
              "No es necesario realizar ninguna acción.",
              "Asegúrese de mantener el locker en un entorno estable.",
            ]}
          />
        </ul>
        <button className="recommendations__back-button" onClick={back}>
          ATRÁS
        </button>
      </div>
    </section>
  );
};
