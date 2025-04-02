import {ReactElement} from "react";

type TitleProps = {
    title: string
}

const Title = ({ title }: TitleProps): ReactElement => {
    return <h1>{title}</h1>
}

export default Title