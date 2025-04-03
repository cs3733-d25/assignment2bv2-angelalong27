import {ReactElement} from "react";
import './list.css';

const List1 = (): ReactElement => {
    return(
        <div>
            <label className="list-label"> Ways to learn dance </label>
            <ul className="list-container">
                <li>Dance Videos</li>
                <li>Dance Classes</li>
                <li>Dance Clubs</li>
                <li>Dance Competitions</li>
                <li>Just Dancing!</li>
            </ul>
        </div>
    )
}

export default List1
