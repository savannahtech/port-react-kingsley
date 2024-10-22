# Dog Catalog Accessibility Exercise

## Project Overview

The **Dog Catalog Accessibility Exercise** is a React application designed to help manage a catalog of dogs. The application includes three main pages:

1. **Catalog Page**: Displays dog cards, each containing the dog's name, picture, and additional details.
2. **Manage Page**: Allows users to add new dogs to the catalog by filling out a form.
3. **About Page**: Provides helpful links related to accessibility.

The primary goal of this project is to ensure the application complies with **WCAG 2.2 accessibility standards** by addressing key areas such as ARIA, alternative text, link purpose, headings, color contrast, and more.

## Key Features

- Accessible forms and interactive elements.
- Responsive design for different device viewports.
- Clear navigation and structure adhering to accessibility guidelines.

## Accessibility Guidelines

This project focuses on making the application compliant with WCAG 2.2 standards, covering:

- **Links**: Ensuring links have meaningful text and proper ARIA labels.
- **Lists**: Structuring data correctly using lists with proper semantics.
- **Headings**: Ensuring hierarchical and meaningful headings for improved navigation.
- **ARIA**: Applying ARIA attributes for assistive technologies.
- **Alternative Text**: Providing descriptive alt texts for images.
- **Color Contrast**: Ensuring the color contrast meets minimum contrast ratios for readability.
- **Forms**: Accessible labels, error handling, and keyboard navigation for forms.
- **Navigation**: Ensuring consistent and intuitive navigation.
- **Font Size**: Making text scalable without losing readability or breaking layout.

## Running the Application

To get started with the application, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **npm**: Comes bundled with Node.js for managing dependencies.

### Installation

1. **Clone the repository**:
   git clone [<repository-url>](https://github.com/Kezykeen/frontend-accessibility-interview-main.git)
   cd frontend-accessibility-interview-main

2. **Install dependencies**:
   npm install

### Running the Application

1. **Start the React development server**:
   npm start

2. **Access the application**:

   Once the server starts, the application will be running at:

   http://localhost:3000

### Folder Structure

frontend-accessibility-interview-main/
│
├── public/ # Public assets
├── src/
│ ├── assets/ # Contains the assets (like svgs) of the application
│ ├── components/ # React components for the application
│ ├── pages/ # Catalog, Manage, About folder pages
│ └── App.css/ # Global and component-specific styles
│ ├── App.tsx # Main application setup
│ ├── index.tsx # Entry point of the app
│
├── cypress/ # Cypress tests and configurations
├── README.md # Project documentation
└── package.json # Project dependencies and scripts

## Running Cypress Tests

### Setup Cypress

1. **Install Cypress**:

   Cypress should already be installed as part of the project dependencies. If not, you can install it manually:
   npm install cypress --save-dev

### Running Tests

1. **Open the Cypress Test Runner**:

   npm run cypress:open

   This will open the Cypress interactive test runner where you can select tests to run.

2. **Run All Tests**:

   npm run cypress:run

   This will run all test files in the background and display the results in the terminal.

### Cypress Test Files

- Cypress test files are located in the `cypress/e2e` folder.
- Example tests include:
  - Checking if the catalog page loads correctly.
  - Ensuring all dog cards render with accurate details.
  - Validating the form on the manage page.

## Important Notes

- The project uses **Vanilla CSS** for styling.
- **Accessibility** features include proper heading structures, ARIA labels, and forms with correct keyboard navigation and labels.
- Ensure **color contrast** passes the WCAG 2.2 guidelines by using tools like the [Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Helpful Tools

Here are some useful tools that were provided to aid in ensuring the app is accessible:

- [Contrast Checker](https://webaim.org/resources/contrastchecker/): Verify color contrast ratios.
- [Landmark Navigation](https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp): A Chrome extension for navigating through landmarks on a page.
- [HTML Color Codes](https://htmlcolorcodes.com/): A tool to help you pick accessible colors.

## Future Improvements

- Continue to improve accessibility by conducting audits and resolving any potential issues flagged by automated tools or manual testing.
- Expand test coverage to ensure the entire user journey is thoroughly validated.

### Contributors

- **Kingsley Okoro** - Project lead and developer.
