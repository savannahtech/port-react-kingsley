import React, { useState } from "react";
import { dogs } from "../../components/data";
import { AlertModal, DogCard } from "../../components";
import "./style.css";

const Catalog: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [dogName, setDogName] = useState("");

  const closeAlert = () => setIsAlertOpen(false);

  const clickHandler = (name: string) => {
    setDogName(name);
    setIsAlertOpen(true);
  };

  return (
    <main className="catalog" aria-labelledby="catalog-heading">
      <h1 id="catalog-heading">Dog Catalog</h1>
      <ul className="dog-cards-container">
        {dogs.map((dog, index) => (
          <li key={index}>
            <DogCard {...dog} clickHandler={clickHandler} />
          </li>
        ))}
      </ul>
      <AlertModal
        isOpen={isAlertOpen}
        onClose={closeAlert}
        title="Dog Name"
        message={`Dog's name is ${dogName}`}
        aria-live="polite"
      />
    </main>
  );
};

export default Catalog;
