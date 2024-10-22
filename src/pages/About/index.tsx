import React, { useState } from "react";
import { resources } from "../../components/data";
import { AlertModal } from "../../components";
import "./style.css"; // Import the CSS for styling

const About: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = () => setIsAlertOpen(true);
  const closeAlert = () => setIsAlertOpen(false);

  return (
    <main className="about-container" aria-labelledby="about-heading">
      <h1 id="about-heading">About This Website</h1>
      <p>
        This website demonstrates the importance of accessibility in web
        development, with a focus on implementing features to enhance user
        experience for individuals with disabilities.
      </p>
      <h2>Helpful Resources</h2>
      <ul id="resource-list">
        {resources.map(({ id, text, url }) => (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button
          className="custom-button"
          onClick={openAlert}
          aria-label="Was this page helpful? Click here to let us know."
        >
          Was this page helpful? Click here to let us know!
        </button>
      </div>
      <AlertModal
        isOpen={isAlertOpen}
        onClose={closeAlert}
        title={"Received!"}
        message={`Thanks! Your feedback is important to us.`}
      />
    </main>
  );
};

export default About;
