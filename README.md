[//]: # (<<<<<<< HEAD)

[//]: # (# React + TypeScript + Vite)

[//]: # ()
[//]: # (This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.)

[//]: # ()
[//]: # (Currently, two official plugins are available:)

[//]: # ()
[//]: # (- [@vitejs/plugin-react]&#40;https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md&#41; uses [Babel]&#40;https://babeljs.io/&#41; for Fast Refresh)

[//]: # (- [@vitejs/plugin-react-swc]&#40;https://github.com/vitejs/vite-plugin-react-swc&#41; uses [SWC]&#40;https://swc.rs/&#41; for Fast Refresh)

[//]: # ()
[//]: # (## Expanding the ESLint configuration)

[//]: # ()
[//]: # (If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:)

[//]: # ()
[//]: # (```js)

[//]: # (// export default tseslint.config&#40;{)

[//]: # (//   extends: [)

[//]: # (//     // Remove ...tseslint.configs.recommended and replace with this)

[//]: # (//     ...tseslint.configs.recommendedTypeChecked,)

[//]: # (//     // Alternatively, use this for stricter rules)

[//]: # (//     ...tseslint.configs.strictTypeChecked,)

[//]: # (//     // Optionally, add this for stylistic rules)

[//]: # (//     ...tseslint.configs.stylisticTypeChecked,)

[//]: # (//   ],)

[//]: # (//   languageOptions: {)

[//]: # (//     // other options...)

[//]: # (//     parserOptions: {)

[//]: # (//       project: ['./tsconfig.node.json', './tsconfig.app.json'],)

[//]: # (//       tsconfigRootDir: import.meta.dirname,)

[//]: # (//     },)

[//]: # (//   },)

[//]: # (// }&#41;)

[//]: # (```)

[//]: # ()
[//]: # (You can also install [eslint-plugin-react-x]&#40;https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x&#41; and [eslint-plugin-react-dom]&#40;https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom&#41; for React-specific lint rules:)

[//]: # ()
[//]: # (```js)

[//]: # (// eslint.config.js)

[//]: # (import reactX from 'eslint-plugin-react-x')

[//]: # (import reactDom from 'eslint-plugin-react-dom')

[//]: # ()
[//]: # (export default tseslint.config&#40;{)

[//]: # (  plugins: {)

[//]: # (    // Add the react-x and react-dom plugins)

[//]: # (    'react-x': reactX,)

[//]: # (    'react-dom': reactDom,)

[//]: # (  },)

[//]: # (  rules: {)

[//]: # (    // other rules...)

[//]: # (    // Enable its recommended typescript rules)

[//]: # (    ...reactX.configs['recommended-typescript'].rules,)

[//]: # (    ...reactDom.configs.recommended.rules,)

[//]: # (  },)

[//]: # (}&#41;)

[//]: # (```)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/JNHhdQGs)
# Assignment 2B - React Web Pages
*DUE: Tuesday, April 2 by 11:59pm, but we will accept the assignment until April 3 at 11:59pm without penalty, if you need the extra day.  

**Enter both of your names below. If we cannot figure out who did the assignment, we cannot grade it!**
### Name: Aditri Thakur
### Name: Angela Long
---
Use this assignment to get up to speed with React.js using the Webstorm IDE, and using Git with another person. When you have completed the assignment, make sure to push your repository to your assignment2b github repository. 

Create a blank Vite React.js project in Webstorm with Typescript enabled:  
Webstorm -> New Project -> Vite -> Template: react -> check Use TypeScript Template

You will take the web page you created in Assignment 1b and will combine it with your partner's web page to create a combined web page. Create the following TSX components and render them in `app.tsx`. Use props to pass your names in the intro.tsx component.
1. __title.tsx__ component that contains a heading with the class, team number, and your two hobbies. For example, __CS3733-D25 Team 97: Pottery and Cello__
2. __intro.tsx__ component that includes a paragraph that introduces both of you. For your names, use props to obtain the names that were passed in from `<App />`
3. __hobby1.tsx__ component that introduces the hobby of the first person and includes an image of their hobby.
   a. __list1.tsx__ component (list from Assignment 1b)
   b. __table1.tsx__ component (table from Assignment 1b)
   c. __form.tsx__ component (form from Assignment 1b)
4.__hobby2.tsx__ component that introduces the hobby of the second person. Create the corresponding list2, table2, and form2 components similar to what is done for hobby1.

Use the App.css stylesheet for all components, except create a list.css and with different styles and use it in list.tsx.

## Assignment Details
* Use Webstorm to clone this repository on your computer.
  * Close any currently open projects.
  * Click on `Get from VCS` and enter the URL of your GitHub assignment2b repo

    
