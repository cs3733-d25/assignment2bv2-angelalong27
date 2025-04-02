import cookingPhoto from './cooking.jpg';
import CuisineList from "@/props/list2.tsx";
import {Table2} from "@/props/table2.tsx";
import {FillForm2} from "@/props/form2.tsx";


function Hobby2() {
    return (
        <div id="Cooking">
            <br/>
            <label className="text-lg font-bold mb-2"> Cooking Recipes! </label>
            <img src={ cookingPhoto } alt="cooking photo" width="360" height="120" />
            <br/>
            <p>
                Hi! I'm Angela and I am currently a student in college who is learning how to cook. My favorite meal of the day and probably the most fun to make in my opinion is breakfast!
                I struggle sometimes to wake up early in the morning, so cooking breakfast gives me something to look forward to when I wake up.
            </p>
            <br/>
            <CuisineList/>
            <Table2/>
            <br/>
            <label className="text-lg font-bold mb-2"> Your favorite cuisines and foods</label>
            <br/>
            <br/>
            <p> What are some of your favorite cuisines, dishes, and meals? </p>
            <br/>
            <FillForm2/>
        </div>
    );
}
export default Hobby2;