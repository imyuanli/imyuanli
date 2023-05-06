import Title from "@/components/title";
import {metadata} from "@/utils";
import React from "react";
import WorkCard from "@/components/work-card";
import Seo from "@/components/seo";
import {useAtomValue} from "jotai";
import {projectAtom} from "@/store";
import Loading from "@/components/loading";

const Project = () => {
    const projectList: any = useAtomValue(projectAtom);
    return (
        <>
            <Seo
                title={'项目 - ' + metadata.title}
                description={'在线的免费工具，开箱即用,简洁、美观、实用的浏览器起始页,更加方便的制作你的Github README.md,简单快速的制作你的简历,用来管理自己所有网站数据的一个后台系统'}
                keywords={'aTools,mini起始页,生成readme,简历制作,后台管理系统'}
            />
            <main>
                <Title value={'项目'}/>
                {
                    projectList ?
                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
                            {projectList.map((item: any, index: any) => {
                                return (
                                    <WorkCard key={index} workItem={item}/>
                                )
                            })}
                        </div>
                        :
                        <Loading/>
                }
            </main>
        </>
    );
}


export default Project