import { useEffect, useState } from "react";
import { RecordedAlertsContext } from "./RecordedAlertsContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../credentials";

export const RecordedAlertsProvider = ({ children }) => {
  const [recordedAlerts, setRecordedAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recorded_alerts"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(data, "xddddd");

        setRecordedAlerts(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <RecordedAlertsContext.Provider value={{ RECORDED_ALERTS: recordedAlerts }}>
      {children}
    </RecordedAlertsContext.Provider>
  );
};
