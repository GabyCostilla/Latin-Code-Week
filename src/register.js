import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dni: "",
    birthday: "",
    email: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulación de registro exitoso
    // Aquí podrías realizar la llamada a la API en una implementación real
    // y manejar la respuesta correctamente
    setTimeout(() => {
      window.alert("🎉 Usuario registrado 🎉");
    }, 1000); // Simula un tiempo de espera de 1 segundo

    // Limpia los campos después de registrar (esto puede cambiar según tus necesidades)
    setUserData({
      firstName: "",
      lastName: "",
      dni: "",
      birthday: "",
      email: "",
    });
  };

  return (
    <>
      <h1>📝 Registrate 📝</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          name="dni"
          value={userData.dni}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="birthdate">Fecha de nacimiento:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={userData.birthday}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">📥 Registrar 📥</button>
      </form>
    </>
  );
}

export default Register;
