import './App.css'
// import Heading from "./props/title"
import Hobby2 from "./props/hobby2.tsx";
import Title from "./props/title.tsx";
import Intro from "./props/intro.tsx";
import Hobby1 from "./props/hobby1.tsx";



function App() {

  return (
    <>
      <Title title={"CS3733-D25 Team 13: Dancing and Cooking"}/>
        <Intro name1={"Aditri"} name2={"Angela"}/>
        <Hobby1 />
        <Hobby2 />
    </>
  )
}

export default App