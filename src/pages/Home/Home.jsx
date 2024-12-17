import { useNavigate } from "react-router-dom";
import smartLockerBN from "../../assets/images/Smart Locker B_N.png";
import { Indicator } from "../../components/Indicator/Indicator";
import { INDICATORS } from "../../utils/constants";
import { auth, dbReal } from "../../credentials";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import "./Home.css";
import { signOut } from "firebase/auth";

export const Home = () => {
  const [arduinoData, setArduinoData] = useState(null);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      // Cerrar sesión
      await signOut(auth);
      console.log("Sesión cerrada correctamente.");
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar la sesión: ", error.message);
      alert("No se pudo cerrar la sesión. Inténtelo de nuevo.");
    }
  };

  const goToAlertHistory = () => {
    navigate("/alert-history");
  };

  const goToRecommendations = () => {
    navigate("/recommendations");
  };

  useEffect(() => {
    const arduinoRef = ref(dbReal, "arduino/data");

    // Escuchar los datos en tiempo real
    const unsubscribe = onValue(arduinoRef, (snapshot) => {
      const data = snapshot.val();
      setArduinoData(data);
    });

    // Limpiar el listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  return (
    <section className="home">
      <div className="home__content">
        <img src={smartLockerBN} alt="Smart Locker" className="home__logo" />
        <h1 className="home__title">EL ESTADO DEL SMART LOCKER ES:</h1>
        {arduinoData ? (
          <>
            <Indicator
              type={INDICATORS.TEMPERATURE}
              value={arduinoData.temperature}
              min={0}
              max={200}
            />
            <Indicator
              type={INDICATORS.HUMIDITY}
              value={arduinoData.humidity}
              min={0}
              max={100}
            />
            <Indicator
              type={INDICATORS.SECURITY}
              value={arduinoData.security}
              // value={"OPEN"}
            />
          </>
        ) : (
          <div>Cargando ...</div>
        )}

        <div className="home__options">
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
          <button
            className="home__option home__option--logout"
            onClick={logout}
          >
            CERRAR SESIÓN
          </button>
        </div>
      </div>
    </section>
  );
};
