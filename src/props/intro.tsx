import {ReactElement} from "react";

type IntroProps = {
    paragraph: string
}

const Intro = ({ paragraph }: IntroProps): ReactElement => {
    return <h1>{paragraph}</h1>
}

export default Intro
