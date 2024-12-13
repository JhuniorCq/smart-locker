import { useEffect, useState } from "react";
import { RecommendationsContext } from "./RecommendationsContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../credentials";

export const RecommendationsProvider = ({ children }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recommendations"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRecommendations(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <RecommendationsContext.Provider
      value={{ RECOMMENDATIONS: recommendations }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
};
