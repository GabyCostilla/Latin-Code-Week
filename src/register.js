import React, { useState } from "react";
import axios from "axios"; 
import "./register.css"
function Register() {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    id: "",
    birthday: "",
    mail: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://my-json-server.typicode.com/fedevirgolini-itr/api_practico5/users`,
        userData
      )
      .then((response) => {
        if (response.status === 201) {
          window.alert("Usuario registrado");
        }
      })
      .catch((error) => window.alert("Error al registrar el usuario"));
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input name="name" type="text" onChange={handleChange} /> <br />
        <label>Apellido</label>
        <input name="surname" type="text" onChange={handleChange} />
        <br />
        <label>DNI</label>
        <input name="id" type="number" onChange={handleChange} />
        <br />
        <label>Fecha de Nacimiento</label>
        <input name="birthday" type="date" onChange={handleChange} />
        <br />
        <label>Mail</label>
        <input name="mail" type="email" onChange={handleChange} />
        <br />
        <button type="submit">Confirmar</button>
      </form>
    </>
  );
}

export default Register;
