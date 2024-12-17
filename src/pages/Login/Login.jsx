import { useNavigate } from "react-router-dom";
import smartLocker from "../../assets/images/Smart Locker.png";
import { useState } from "react";
import { auth } from "../../credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

export const Login = () => {
  const [form, setForm] = useState({
    email: null,
    password: null,
  });
  const navigate = useNavigate();

  const access = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/home");
    } catch (error) {
      console.error("Credenciales incorrectas. Inténtalo de nuevo.");
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  const handleInput = ({ target }) => {
    const { name, value } = target;

    if (!value) return;

    setForm({ ...form, [name]: value });
  };

  return (
    <section className="login">
      <img src={smartLocker} alt="Smart Locker" className="login__logo" />
      <form className="login__form" onSubmit={access}>
        <input
          type="text"
          name="email"
          placeholder="Correo"
          className="login__input"
          onChange={handleInput}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login__input"
          onChange={handleInput}
          required
        />
        <button className="login__button">CONECTAR</button>
      </form>
    </section>
  );
};
