# Guide Notes

## Link to the project

https://react-dev.vanessabarsotti.com/

## Description

This application is being developed to help splitting common expenses of groups of friends on events and calculate each participant's share.

### Sprint #01

- This first sprint includes the initial setup, structure of compontents, and design.
- The goal for this sprint is to be able to include groups, expenses, and get each individual share.
- Next sprint (sprint #2) goals:
  - Fix sprint #1 bugs
  - Add participants names (for each group)
  - Update groups and expenses informations (edit button)
  - Delete groups or expenses (delete button)
  - Develop local storage system
  - Drag and Drop participants and groups names

## Quick start

- Run: `npx create-react-app splitez`
- Clean up extra files
- Include information on .gitignore (ex: exclude docs folder)
- Start: `npm start`

## Install modules:

- Router: `npm i react-router-dom`

## Styling:

- Sass: `npm i sass --save-dev`
- Import inside App.js: `import './styles/css/styles.css';`
- Include script on package.json:
  `"scripts": { "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map" }`
- Run sass: `npm run sass`
- Create directories inside src folder:
  - styles
    - css
    - scss => styles.scss file
- Bootstrap: `npm i bootstrap`
- React Bootstrap: `npm i react-bootstrap`
- React icons: `npm i react-icons`

## Mock api to simulate backend:

- Install: `npm i json-server`

## Setup Axios:

- Create directory data outside src folder:
- Include db.json inside this data folder
- Install: `npm i axios`;
- Create directory api inside src folder:
- Create a file inside api folder to setup the endpoint (Ex: groups.js)
- Launch json-server: `npx json-server -p 5000 -w data/db.json`
- Open new terminal and run npm start
- Import to the file being used: `import api from '../api/books';`
- Define useEffect hook

## Setup to run all together:

- Install: `npm i concurrently --save-dev`
- Include script on package.json (DON'T DELETE WHAT WAS INSTALLED BEFORE):
  `"scripts": { "dev": "concurrently --kill-others \"npm start\" \"npm run sass\" \"npm run server\"" }`
- Run dev: `npm run dev`
