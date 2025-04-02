import {ReactElement} from "react";

const List1 = (): ReactElement => {
    return(
        <div>
            <label className="text-lg font-bold mb-2"> Ways to learn dance </label>
            <ul className="w-full text-left list-disc mb-5">
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
