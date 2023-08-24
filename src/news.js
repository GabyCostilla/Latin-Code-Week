import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./news.css"

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '29425ccef3844a2f982c8d0f65fa4230'; // Reemplaza con tu clave de API
    const apiUrl = `https://newsapi.org/v2/everything?q=energ%C3%ADa%20renovable&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error('❗️ Error fetching news:', error);
      });
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-title">📰 Últimas Noticias sobre Energías Renovables 🌱</h2>
      <ul className="news-list">
        {news.map((article, index) => (
          <li key={index} className="news-item">
            <h3 className="news-title">{article.title}</h3>
            <p className="news-description">{article.description}</p>
            <a className="news-link" href={article.url} target="_blank" rel="noopener noreferrer">
              Leer más ➡️
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
