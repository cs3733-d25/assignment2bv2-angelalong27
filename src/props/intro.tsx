import {ReactElement} from "react";


//intro.tsx component that includes a paragraph that introduces both of you. For your names, use props to obtain the names that were passed in from <App />
type IntroProps = {
    paragraph: string
}

const Intro = ({ paragraph }: IntroProps): ReactElement => {
    return <p>{paragraph}</p>
}

export default Intro
