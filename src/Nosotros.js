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
    rol: "Ingeniero en Sistemas",
    emoji: "🍃",
  },
  {
    nombre: "Patricio Gallo Dillon",
    rol: "Desarrollador Frontend",
    emoji: "🌲",
  },
  {
    nombre: "Nicolas Coronel Arevalo",
    rol: "Analista de Datos",
    emoji: "🌴",
  },
  {
    nombre: "Maximiliano Palavecino",
    rol: "Desarrollador Backend",
    emoji: "🌳",
  },
];

function Nosotros() {
  return (
    <div className="nosotros-container">
      <h1>🌱 Quiénes Somos 🌱</h1>
      <div className="autores-list">
        <h3>👩‍💻👨‍💻 Integrantes 👨‍💻👩‍💻</h3>
        {autores.map((autor, index) => (
          <div key={index} className="autor-card">
            <span role="img" aria-label="Emoticono de autor">
              {autor.emoji}
            </span>{" "}
            {autor.nombre}
          </div>
        ))}
       </div>
      <div className="mision">
        <h3>Nuestra Misión 🌍</h3>
        <p>
          En Latin Code Week, nos esforzamos por fomentar la conciencia ambiental
          a través de la tecnología. Creemos que la combinación de la innovación
          y la sostenibilidad es clave para enfrentar los desafíos globales.
        </p>
      </div>
      <div className="unete">
        <h3>¡Únete a Nosotros! 📞</h3>
        <p>
          Síguenos en{" "}
          <a
            href="https://www.instagram.com/instituto_tecnico_renault/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
