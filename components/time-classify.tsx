import dayjs from "dayjs";
import MyLink from "@/components/my-link";
import React from "react";

interface props {
    create_time: any,
    classify_value: any,
    view_count:any
}

const TimeClassify: React.FunctionComponent<props> = ({create_time, classify_value,view_count}) => {
    return (
        <div className={'flex items-baseline text-sm text-gray-500 space-x-1'}>
            <div>{dayjs(create_time).format('YYYY-MM-DD')}</div>
            <div>{` • `}</div>
            <div>
                阅读 {view_count}
            </div>
            <div>{` • `}</div>
            <div>{classify_value}</div>
        </div>
    );
}


export default TimeClassify