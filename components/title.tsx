import React from "react";

interface props {
    title?: string,
    describe?: string,
}

const Title: React.FunctionComponent<props> = ({title, describe}: any) => {
    return (
        <div className={'flex-center flex-col mb-6 w-full text-center text-white'}>
            <div className={'text-4xl font-bold mb-3'}>
                {title}
            </div>
            <div className={'text-2xl'}>
                {describe}
            </div>
        </div>
    );
}

export default Title