import React from "react";

interface props {
    text: string
}

const Btn: React.FunctionComponent<props> = ({text}) => {
    return (
        <div className={'mt-auto text-highlight  flex justify-center md:justify-end font-semibold'}>
            {text} →
        </div>
    );
}


export default Btn