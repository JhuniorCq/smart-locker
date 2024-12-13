import { useNavigate } from "react-router-dom";
import smartLocker from "../../assets/images/Smart Locker.png";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const access = (e) => {
    e.preventDefault();
    // Lógica para el acceso a "Smart Locker"
    navigate("/home");
  };

  return (
    <section className="login">
      <img src={smartLocker} alt="Smart Locker" className="login__logo" />
      <form className="login__form" onSubmit={access}>
        <input
          type="text"
          placeholder="Ingresa tu ID"
          className="login__input"
        />
        <button className="login__button">CONECTAR</button>
      </form>
    </section>
  );
};
