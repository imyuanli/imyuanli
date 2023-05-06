import Head from 'next/head'
import {Card, Tag} from "antd";
import {
    AntDesignOutlined,
    CodeOutlined,
    CustomerServiceOutlined,
    ExperimentOutlined,
    ManOutlined,
    ToolOutlined
} from "@ant-design/icons";
import {metadata} from "@/utils";
import React from "react";
import Section from "@/components/section";
import WorkCard from "@/components/work-card";
import ArticleCard from "@/components/article-card";
import {useAtomValue} from "jotai";
import {articleAtom, projectAtom} from "@/store";
import Loading from "@/components/loading";
import IconFont from "@/components/icon-font";
import Seo from "@/components/seo";

const iconCss = {fontSize: 32, color: metadata.primaryColor}
const cardDetailArr = [
    {
        icon: <IconFont type="icon-development" style={iconCss}/>,
        title: '全栈开发',
        describe: "react重度使用者,后端常用django和fastapi"
    },
    {
        icon: <CodeOutlined style={iconCss}/>,
        title: '热爱Coding',
        describe: "享受代码的乐趣"
    },
    {
        icon: <AntDesignOutlined style={iconCss}/>,
        title: '极简设计',
        describe: "喜欢简约的设计,Simple but not simple"
    }
]
export default function Home() {
    const projectList: any = useAtomValue(projectAtom);
    const articleList: any = useAtomValue(articleAtom);
    return (
        <>
            <Seo
                title={metadata.title}
                description={metadata.description}
                keywords={'鸢离的首页'}
            />
            <main>
                <Section>
                    <div className={'flex-center flex-col'}>
                        <div className={'text-3xl font-bold mb-3'}>Hey，我是鸢离</div>
                        <div className={'text-lg  text-gray-600 mb-3'}>一名前端开发工程师</div>
                        <div>
                            <Tag icon={<ManOutlined/>} color={metadata.primaryColor}>
                                00后
                            </Tag>
                            <Tag icon={<ToolOutlined/>} color={metadata.primaryColor}>
                                Developer
                            </Tag>
                            <Tag icon={<CustomerServiceOutlined/>} color={metadata.primaryColor}>
                                Music
                            </Tag>
                        </div>
                    </div>
                </Section>
                <Section>
                    <Card className={'w-full shadow-md'}>
                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-16'}>
                            {
                                cardDetailArr.map((item, index) => {
                                    return (
                                        <div key={index} className={'flex-center flex-col space-y-3'}>
                                            <div>
                                                {item.icon}
                                            </div>
                                            <div className={'text-xl font-bold'}>
                                                {item.title}
                                            </div>
                                            <div className={'text-gray-400'}>
                                                {item.describe}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Card>
                </Section>
                <Section title={'热门作品'} href={'/project'}>
                    {
                        projectList ?
                            <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
                                {projectList.map((item: any, index: any) => {
                                    if (index < 3) {
                                        return (
                                            <WorkCard key={index} workItem={item}/>
                                        )
                                    }
                                })}
                            </div>
                            :
                            <Loading/>
                    }
                </Section>
                <Section title={'最新文章'} href={'/blog'}>
                    {
                        articleList ?
                            <div className={'grid grid-cols-1 gap-6'}>
                                {articleList?.map((item: any, index: any) => {
                                    if (index < 6) {
                                        return (
                                            <ArticleCard key={item.id} article={item}/>
                                        )
                                    }
                                })}
                            </div>
                            :
                            <Loading/>
                    }
                </Section>
            </main>
        </>
    )
}
