import {ReactElement} from "react";

type TitleProps = {
    title: string
}

const Title = ({ title }: TitleProps): ReactElement => {
    return <h1 className="font-bold text-3xl pb-2">{title}</h1>
}

export default Title