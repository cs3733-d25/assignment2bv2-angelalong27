import {FillForm} from "./form1.tsx";
import List1 from "./list1.tsx";
import Table1 from "./table1.tsx";
import Dance from '../../public/indianDance.jpg';
import '../App.css';

function Hobby1() {

    return (
        <>
            <br/>
            <p>This section is about my hobby of Dancing. I've been dancing since I was 10 years old.
                The first dance form I learned was Bharatanatyam or classical Indian dance. I've also been apart of
                the competitive dance group here at WPI, Rangeela.</p>
            <img src={ Dance } alt="dancer" width="360" height="120" />
            <List1/>
            <Table1/>
            <FillForm/>
        </>
    )
}

export default Hobby1