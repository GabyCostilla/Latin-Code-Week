import React from "react";
import "./Nosotros.css";

const autores = [
  {
    nombre: "Tomas Cipriano Bagnardi",
    rol: "Desarrollador Full Stack",
    emoji: "🌍",
  },
  {
    nombre: "Paul Michel Josue",
    rol: "Diseñador UX/UI",
    emoji: "🌿",
  },
  {
    nombre: "Gabriel Agustin Costilla",
    rol: "Desarrollador Backend",
    emoji: "🍃",
  },
  {
    nombre: "Patricio Gallo Dillon",
    rol: "Analista de Datos",
    emoji: "🌲",
  },
  {
    nombre: "Nicolas Coronel Arevalo",
    rol: "Desarrollador Frontend",
    emoji: "🌴",
  },
  {
    nombre: "Maximiliano Palavecino",
    rol: "Consultor en Tecnología",
    emoji: "🌳",
  },
];

function Nosotros() {
  return (
    <div className="nosotros-container">
      <h1>👩‍💻👨‍💻 ¡Bienvenidos a Latin Code Week! 👨‍💻👩‍💻</h1>
      <img
        src="https://junior.org.ar/wp-content/uploads/2023/05/Diseno-sin-titulo-2023-05-29T164745.659.png"
        alt="Latin Code Week"
        className="imagen"
      />
      <p className="descripcion">
        Somos un equipo apasionado por la tecnología y la sostenibilidad.
        Trabajamos juntos para crear soluciones innovadoras y ecológicas para
        un mundo mejor.
      </p>
      <div className="autores-list">
        <h3 className="titulo">🌱 Integrantes 🌱</h3>
        {autores.map((autor, index) => (
          <div key={index} className="autor-card">
            <span role="img" aria-label="Emoticono de autor">
              {autor.emoji}
            </span>{" "}
            {autor.nombre} - {autor.rol}
          </div>
        ))}
      </div>
      <div className="mision">
        <h3 className="titulo">Nuestra Misión 🌍</h3>
        <p className="descripcion">
          En Latin Code Week, nos esforzamos por fomentar la conciencia ambiental
          a través de la tecnología. Creemos que la combinación de la innovación
          y la sostenibilidad es clave para enfrentar los desafíos globales.
        </p>
      </div>
      <div className="unete">
        <h3 className="titulo">¡Únete a Nosotros! 📞</h3>
        <p className="descripcion">
          Síguenos en{" "}
          <a
            href="https://www.instagram.com/instituto_tecnico_renault/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          y visita también{" "}
          <a
            href="https://junior.org.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="unete-link"
          >
            Junior Achievement Argentina.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
