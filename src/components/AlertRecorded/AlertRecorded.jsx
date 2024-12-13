import { useNavigate } from "react-router-dom";
import "./AlertRecorded.css";

export const AlertRecorded = ({
  id,
  name,
  date,
  details,
  idRecommendation,
}) => {
  const navigate = useNavigate();

  const goToAlertDetails = () => {
    navigate(
      `/alert-details/${id}` /*, {
      state: {
        alertDetails: details,
        idRecommendation,
      },
    }*/
    );
  };

  return (
    <div className="alert-recorded">
      <h2 className="alert-recorded__name">{name}</h2>
      <p className="alert-recorded__date">{date}</p>
      <button className="alert-recorder__button" onClick={goToAlertDetails}>
        VER MÁS
      </button>
    </div>
  );
};
