# Cypress-Conversation-Demo
Prerequisite - Nodejs and Npm should be installed

# Cypress and Javascript

## Usage

1) npm install  => (Run this command from your base path of the project
where package.json file is present. It will install all project dependencies)

2) To run test using Cypress runner:
   a) Open Cypress runner => node_modules\.bin\cypress open
   b) To run test => node_modules\.bin\cypress run

## Scripts Options

"test": "npx cypress run",
"headTest": "npm run test --headed",
"chromeTest": "npm run test --browser chrome",
"recordDashBoardTest": "npm run test --record --key 82f76464-a5fa-4ea4-a598-0c909a4c5a4d --reporter mochawesome",
"SpectrmTest": "npm run test --spec \"cypress/e2e/Spectrm/*\""


## Project Details
-- Mochawesome Reporter
-- Javascript PageObjects
-- Chai For assertions
-- Cypress with Chrome, Electron, Edge and Firefox capabilties
-- Vscode launch configuration to debug tests