import React from 'react';
import {Divider} from "antd";

interface props {
    value: any,
    children?:any
}

const Title: React.FunctionComponent<props> = ({value,children}) => {
    return (
        <div>
            <div className={'grid grid-cols-5 md:grid-cols-4 items-center mb-3'}>
                <div className={'col-span-2 text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-gray-900'}>
                    {value}
                </div>
                <div className={'col-span-3 md:col-span-2'}>
                    {children}
                </div>
            </div>
            <Divider/>
        </div>
    )
};

export default Title