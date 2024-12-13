import smartLockerBN from "../../assets/images/Smart Locker B_N.png";

import "./AlertHistory.css";

export const AlertHistory = () => {
  return (
    <section className="alert-history">
      <div className="alert-history__content">
        <img
          src={smartLockerBN}
          alt="Smart Locker"
          className="alert-history__logo"
        />
        <h1 className="alert-history__title">ALERTAS REGISTRADAS</h1>
        <ul className="alert-history__list"></ul>

        <div>
          <button>VACIAR</button>
          <button>ATRÁS</button>
        </div>
      </div>
    </section>
  );
};
