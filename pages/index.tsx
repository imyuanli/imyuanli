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

const iconCss = {fontSize: 32, color: metadata.primaryColor}
const cardDetailArr = [
    {
        icon: <IconFont type="icon-reactjs-line" style={iconCss}/>,
        title: 'React狂热者',
        describe: "热爱react的一切"
    },
    {
        icon: <IconFont type="icon-development" style={iconCss}/>,
        title: '全栈开发',
        describe: "后端常用django和fast api"
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
            <Head>
                <title>鸢离</title>
                <meta name="keywords" content="鸢离,yuanli,imyuanli,个人网站,我的作品"/>
                <meta name="description" content="鸢离,yuanli,imyuanli,个人网站,我的作品,这里是鸢离的个人网站,包含了我的部分作品及网站的动态,网站首页"/>
                <meta httpEquiv="Content-Type" content="text/html;charset=gb2312"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="360-site-verification" content="640d32949bba6deb803d4ae7659aefaf"/>
                <meta name="sogou_site_verification" content="cDJfCXqbDX"/>
                <meta name="baidu-site-verification" content="codeva-5fmdAxw1GK"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
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
                        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20'}>
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
                            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'}>
                                {projectList.map((item: any, index: any) => {
                                    if (index < 4) {
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
                            <div className={'grid grid-cols-1  gap-6'}>
                                {articleList?.map((item: any, index: any) => {
                                    if (index < 3) {
                                        return (
                                            <Card key={item.id} className={'shadow-md'}>
                                                <ArticleCard article={item}/>
                                            </Card>
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
