import React from "react";
import "./style.css";

interface DogCardProps {
  id: number;
  name: string;
  age: number;
  picture: string;
  height: string;
  color: string;
  favoritePortFeature: string;
  favoriteMeal: string;
  clickHandler: (name: string) => void;
}

export const DogCard: React.FC<DogCardProps> = ({
  id,
  name,
  age,
  height,
  picture,
  color,
  favoritePortFeature,
  favoriteMeal,
  clickHandler,
}) => {
  return (
    <article className="dog-card" aria-labelledby={`dog-name-${name}-${id}`}>
      <img
        src={picture}
        alt={`A ${color} dog named ${name}, ${age} years old.`}
        className="dog-image"
      />
      <h2 id={`dog-name-${id}`}>{name}</h2>
      <dl id={`dog-info-${id}`}>
        <div className="category">
          <dt className="category-label">ID:</dt>
          <dd className="category-value">{id}</dd>
        </div>
        <div className="category">
          <dt className="category-label">Age:</dt>
          <dd className="category-value">{age} years</dd>
        </div>
        <div className="category">
          <dt className="category-label">Height:</dt>
          <dd className="category-value">{height}</dd>
        </div>
        <div className="category">
          <dt className="category-label">Color:</dt>
          <dd className="category-value">{color}</dd>
        </div>
        <div className="category">
          <dt className="category-label">Favorite Feature:</dt>
          <dd className="category-value">{favoritePortFeature}</dd>
        </div>
        <div className="category">
          <dt className="category-label">Favorite Meal:</dt>
          <dd className="category-value">{favoriteMeal}</dd>
        </div>
      </dl>

      <button
        className="dog-name-button"
        onClick={() => clickHandler(name)}
        aria-label={`Reveal ${name}'s name`}
      >
        Reveal Dog's Name
      </button>
    </article>
  );
};
