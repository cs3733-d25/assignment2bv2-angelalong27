import cookingPhoto from './public/cooking.jpg';

function Hobby2() {
    return (
        <div id="Cooking">
            <p>
                Hi! I'm Angela and I am currently a student in college who is learning how to cook.
                My favorite meal of the day and probably the most fun to make in my opinion is breakfast!
                I struggle sometimes to wake up early in the morning, so cooking breakfast gives me something to look forward to when I wake up.
            </p>
            <img src={ cookingPhoto } alt="cooking photo" width="650" height="140" />
        </div>
    );
}

export default Hobby2;