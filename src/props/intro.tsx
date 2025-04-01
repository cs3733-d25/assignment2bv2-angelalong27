type IntroProps = {
    name1: string
    name2: string
}

const Intro = ({ name1, name2 }: IntroProps)=> {
    return(
        <div>
            <p>
                This is website dedicated to the hobbies of dancing and cooking!
                 {name1}'s hobby is dancing and {name2}'s hobby is cooking!
            </p>
        </div>)
}

export default Intro
