import React from "react";

interface props {
    text: string,
    icon: any,
    w: any
}

const Btn: React.FunctionComponent<props> = ({text, icon, w}) => {
    return (
        <div className={`bg-linear-color ${w} h-14 rounded-full flex-center text-white font-semibold text-xl`}>
            <span className={'mr-3'}>{text}</span>
            {icon}
        </div>
    );
}


export default Btn