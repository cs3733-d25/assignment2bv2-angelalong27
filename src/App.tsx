import './App.css'
import Heading from "./props/title"
import CuisineList from './props/list2';
import { FillForm2 } from './props/form2';
import Hobby2 from "./props/hobby2.tsx";

function App() {

  return (
    <>
      <Heading title={"CS3733-D25 Team 13: Dancing and Cooking"}/>
      <Hobby2 />
      <CuisineList />
      <FillForm2 />
    </>
  )
}

export default App