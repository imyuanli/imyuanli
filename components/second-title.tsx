import React from "react";

interface props {
    title?: string,
    describe?: string,
}

const SecondTitle: React.FunctionComponent<props> = ({title, describe}: any) => {
    return (
        <div className={'text-white text-center md:text-left'}>
            <div className={'text-3xl font-bold'}>{title}</div>
            <div className={'text-xl'}>{describe}</div>
        </div>
    );
}


export default SecondTitle