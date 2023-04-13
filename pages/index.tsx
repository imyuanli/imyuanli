import Head from 'next/head'
import {Card, Divider, Tag} from "antd";
import Image from 'next/image'
import {
    AntDesignOutlined,
    CodeOutlined,
    CustomerServiceOutlined,
    ExperimentOutlined, EyeOutlined,
    ManOutlined, MessageOutlined,
    ToolOutlined
} from "@ant-design/icons";
import {DEFAULT_WORK_LIST, metadata, test_article} from "@/utils";
import React from "react";
import Section from "@/components/section";
import Link from "next/link";
import WorkCard from "@/components/work-card";
import ArticleCard from "@/components/article-card";

const {Meta} = Card;

const iconCss = {fontSize: 26, color: metadata.primaryColor}
const cardDetailArr = [
    {
        icon: <CodeOutlined style={iconCss}/>,
        title: '全栈开发',
        describe: "平时开发后端用的是django和fast api居多"
    },
    {
        icon: <ExperimentOutlined style={iconCss}/>,
        title: '热爱Coding',
        describe: "喜欢接触新的技术"
    },
    {
        icon: <AntDesignOutlined style={iconCss}/>,
        title: '极简设计',
        describe: "享受简约的设计,Simple but not simple"
    },
]
export default function Home() {
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
                        <div className={'text-3xl font-bold mb-3'}>Hello，我是鸢离</div>
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
                    <Card className={'shadow-md w-full'}>
                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
                            {
                                cardDetailArr.map((item, index) => {
                                    return (
                                        <div key={index} className={'mb-3 md:mb-0 space-y-2'}>
                                            <div>
                                                {item.icon}
                                            </div>
                                            <div className={'text-2xl font-bold'}>
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
                <Section title={'热门作品'} href={'/work'}>
                    <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3'}>
                        {DEFAULT_WORK_LIST.map((item, index) => {
                            return (
                                <WorkCard key={index} workItem={item}/>
                            )
                        })}
                    </div>
                </Section>
                <Section title={'近期博客'} href={'/blog'}>
                    <div className={'grid grid-cols-1 md:grid-cols-3 gap-x-9'}>
                        {test_article.map((item, index) => {
                            return (
                                <ArticleCard key={item.id} article={item}/>
                            )
                        })}
                    </div>
                </Section>
            </main>
        </>
    )
}
