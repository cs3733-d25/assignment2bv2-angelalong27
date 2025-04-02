import './App.css'
// import Heading from "./props/title"
import CuisineList from './props/list2';
import { FillForm2 } from './props/form2';
import Hobby2 from "./props/hobby2.tsx";
import Title from "./props/title.tsx";
import Intro from "./props/intro.tsx";
import Hobby1 from "./props/hobby1.tsx";
import Dancer from "./assets/indianDance.jpg";


function App() {

  return (
    <>
      <Title title={"CS3733-D25 Team 13: Dancing and Cooking"}/>
        <Intro name1={"Aditri"} name2={"Angela"}/>
      <Hobby2 />
      <CuisineList />
      <FillForm2 />
      <img src={Dancer} alt="dancer" width="360"/>
      <Hobby1 />
    </>
  )
}

export default App