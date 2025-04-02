// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Title from "./props/title.tsx"
import Intro from "./props/intro.tsx"
import Hobby1 from "./props/hobby1.tsx"
import Dancer from "./assets/indianDance.jpg"

function App() {

  return (
    <>
      <Title title={"CS3733-D25 Team 13: Dancing and Cooking"}/>
      <Intro name1={"Aditri"} name2={"Angela"}/>
      <img src={Dancer} alt="dancer" width="360"/>
      <Hobby1 />
    </>
  )
}

export default App
