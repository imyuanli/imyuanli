import Title from "@/components/title";
import {DEFAULT_WORK_LIST} from "@/utils";
import React from "react";
import WorkCard from "@/components/work-card";

const Blog = () => {
    return (
        <div>
            <Title value={'项目'}/>
            <div className={'grid grid-cols-1 md:grid-cols-3 gap-3'}>
                {DEFAULT_WORK_LIST.map((item, index) => {
                    return (
                        <WorkCard key={index} workItem={item}/>
                    )
                })}
            </div>
        </div>
    );
}


export default Blog