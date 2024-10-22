import React, { useState } from "react";
import { AlertModal } from "../../components";
import "./style.css";

const Manage = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [dogData, setDogData] = useState({
    name: "",
    age: "",
    height: "",
    color: "",
    favoriteToy: "",
    favoriteMeal: "",
  });

  const openAlert = () => setIsAlertOpen(true);
  const closeAlert = () => {
    setIsAlertOpen(false);
    setDogData({
      name: "",
      age: "",
      height: "",
      color: "",
      favoriteToy: "",
      favoriteMeal: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openAlert();
  };

  return (
    <main className="manage-container" aria-labelledby="manage-heading">
      <h2 id="manage-heading">Add a New Dog</h2>
      <form
        onSubmit={handleSubmit}
        className="dog-form"
        aria-labelledby="form-heading"
      >
        <h3 id="form-heading" className="visually-hidden">
          Dog Information Form
        </h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={dogData.name}
            onChange={handleChange}
            required
            placeholder="Charlie"
            aria-required="true"
            aria-invalid={dogData.name === ""}
            aria-describedby="name-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            name="age"
            value={dogData.age}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={dogData.age === ""}
            aria-describedby="age-error"
            min="0"
            max="30"
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height:</label>
          <input
            id="height"
            type="text"
            name="height"
            value={dogData.height}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={dogData.height === ""}
            aria-describedby="height-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color:</label>
          <input
            id="color"
            type="text"
            name="color"
            value={dogData.color}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={dogData.color === ""}
            aria-describedby="color-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteToy">Favorite Toy:</label>
          <input
            id="favoriteToy"
            type="text"
            name="favoriteToy"
            value={dogData.favoriteToy}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={dogData.favoriteToy === ""}
            aria-describedby="favoriteToy-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteMeal">Favorite Meal:</label>
          <input
            id="favoriteMeal"
            type="text"
            name="favoriteMeal"
            value={dogData.favoriteMeal}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={dogData.favoriteMeal === ""}
            aria-describedby="favoriteMeal-error"
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          aria-label="Submit new dog details"
        >
          Add Dog
        </button>
      </form>

      <figure
        className="dogs-form-image"
        role="img"
        aria-labelledby="dog-image-caption"
      >
        <img src={`https://placedog.net/1000/300/random?id=128`} alt="" />
        <figcaption id="dog-image-caption">A random cute dog</figcaption>
      </figure>

      <AlertModal
        isOpen={isAlertOpen}
        onClose={closeAlert}
        title="Dog Added"
        message={`Dog name: ${dogData.name} was added successfully!`}
      />
    </main>
  );
};

export default Manage;
