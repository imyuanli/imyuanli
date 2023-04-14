import React from 'react';
import {Divider, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";

interface props {
    value: any
}

const Title: React.FunctionComponent<props> = ({value}) => {
    return (
        <>
            <div className={'py-9'}>
                <div className={'grid grid-cols-4 items-center mb-3'}>
                    <div className={'col-span-2 text-4xl font-extrabold leading-9 tracking-tight text-gray-900'}>
                        {value}
                    </div>
                    <div className={'col-span-2'}>
                        <Input
                            placeholder="Basic usage"
                            size={'large'}
                            suffix={<SearchOutlined/>}
                        />
                    </div>
                </div>
                <Divider/>
            </div>
        </>
    )
};

export default Title