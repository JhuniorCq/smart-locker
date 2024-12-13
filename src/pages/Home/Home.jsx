import { useNavigate } from "react-router-dom";
import smartLockerBN from "../../assets/images/Smart Locker B_N.png";
import { Indicator } from "../../components/Indicator/Indicator";
import { INDICATORS } from "../../utils/constants";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

  const reload = () => {
    window.location.reload();
  };

  const goToAlertHistory = () => {
    navigate("/alert-history");
  };

  const goToRecommendations = () => {
    navigate("/recommendations");
  };

  return (
    <section className="home">
      <div className="home__content">
        <img src={smartLockerBN} alt="Smart Locker" className="home__logo" />
        <h1 className="home__title">EL ESTADO DEL SMART LOCKER ES:</h1>
        <Indicator type={INDICATORS.TEMPERATURE} value={25} min={0} max={200} />
        <Indicator type={INDICATORS.HUMIDITY} value={45} min={0} max={100} />
        <Indicator type={INDICATORS.SECURITY} open={true} />

        <div className="home__options">
          <button
            className="home__option home__option--refresh"
            onClick={reload}
          >
            REFRESCAR
          </button>
          <button
            className="home__option home__option--alert-history"
            onClick={goToAlertHistory}
          >
            HISTORIAL DE ALERTAS
          </button>
          <button
            className="home__option home__option--recommendations"
            onClick={goToRecommendations}
          >
            RECOMENDACIONES
          </button>
        </div>
      </div>
    </section>
  );
};
