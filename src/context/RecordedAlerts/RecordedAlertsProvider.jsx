import { useEffect, useState } from "react";
import { RecordedAlertsContext } from "./RecordedAlertsContext";
import { dbReal } from "../../credentials";
import { onValue, ref } from "firebase/database";

export const RecordedAlertsProvider = ({ children }) => {
  const [recordedAlerts, setRecordedAlerts] = useState(null);

  useEffect(() => {
    const arduinoRef = ref(dbReal, "arduino/alertHistory");
    // Escuchar los datos en tiempo real
    const unsubscribe = onValue(arduinoRef, (snapshot) => {
      const dataAlerts = snapshot.val();
      const keys = Object.keys(dataAlerts);
      const cleanAlertsData = keys.map((key, index) => ({
        id: index + 1,
        ...dataAlerts[key],
      }));

      setRecordedAlerts(cleanAlertsData);
    });

    // Limpiar el listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  return (
    <RecordedAlertsContext.Provider value={{ RECORDED_ALERTS: recordedAlerts }}>
      {children}
    </RecordedAlertsContext.Provider>
  );
};
