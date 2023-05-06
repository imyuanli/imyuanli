import dayjs from "dayjs";
import MyLink from "@/components/my-link";
import React from "react";
import {useAtomValue} from "jotai";
import {classifyAtom} from "@/store";

interface props {
    create_time: any,
    classify_value: any,
    view_count: any
}

const TimeClassify: React.FunctionComponent<props> = ({create_time, classify_value, view_count}) => {

    const classifyList: any = useAtomValue(classifyAtom);
    //获取当前名称
    const getCurName = (value: string) => classifyList && classifyList.find((item: any) => item.classify_value == value)?.classify_label
    return (
        <div className={'flex items-baseline text-sm text-gray-500 space-x-1'}>
            <div>{dayjs(create_time).format('YYYY-MM-DD')}</div>
            <div>{` • `}</div>
            <div>
                阅读 {view_count}
            </div>
            <div>{` • `}</div>
            <MyLink href={`/blog?classify=${classify_value}`} text={getCurName(classify_value)}/>
        </div>
    );
}


export default TimeClassify