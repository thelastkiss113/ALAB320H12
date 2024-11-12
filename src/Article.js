import React from 'react';

function Article({ date, title, imgSrc, imgAlt, text, readMoreLink }) {
  return (
    <article>
      <h2>{date}</h2>
      <h3>{title}</h3>
      <img src={imgSrc} alt={imgAlt} />
      <p>{text}</p>
      <a href={readMoreLink}>Continues...</a>
    </article>
  );
}

export default Article;
