# Guide Notes

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
- Burger-menu: `npm i react-burger-menu`
- Responsive picture: `npm i react-responsive-image`

## Setup to run all together:

- Install: `npm i concurrently --save-dev`
- Include script on package.json (DON'T DELETE WHAT WAS INSTALLED BEFORE):
  `"scripts": { "dev": "concurrently --kill-others \"npm start\" \"npm run sass\"" }`
- Run dev: `npm run dev`
