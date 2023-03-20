import Head from 'next/head'
import {Card, Tag} from "antd";
import Image from 'next/image'
import {
    ArrowRightOutlined,
    BulbOutlined,
    CodeOutlined,
    ExperimentOutlined,
} from "@ant-design/icons";
import {RECOMMEND_WORK_LIST} from "@/utils";
import Link from "next/link";
import React from "react";

const {Meta} = Card;

const iconCss = {fontSize: 26, color: '#13c2c2'}
const cardDetailArr = [
    {
        icon: <BulbOutlined style={iconCss}/>,
        title: '我是鸢离',
        describe: "是一名前端开发工程师,主要使用react开发"
    },
    {
        icon: <CodeOutlined style={iconCss}/>,
        title: '全栈开发',
        describe: "平时开发后端用的是django和fast api"
    },
    {
        icon: <ExperimentOutlined style={iconCss}/>,
        title: '极简设计',
        describe: "喜欢简约的设计,Simple but not simple"
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
                <section className={'flex-center flex-col my-12'}>
                    <Card className={'shadow-md w-full'}>
                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
                            {
                                cardDetailArr.map((item, index) => {
                                    return (
                                        <div key={index} className={'mb-6 md:mb-0'}>
                                            <div className={'mb-2'}>
                                                {item.icon}
                                            </div>
                                            <div className={'text-2xl font-bold mb-2'}>
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
                </section>
                <section className={'my-12'}>
                    <div className={'flex items-center justify-center md:justify-between'}>
                        <div className={'text-center md:text-left'}>
                            <div className={'text-3xl font-bold'}>部分作品</div>
                        </div>
                        <Link className={'hidden md:block'} href={'/work'}>
                            <div
                                className={'bg-linear-color w-48 h-14 rounded-full flex-center text-white font-semibold text-xl'}>
                                <span className={'mr-3'}>View All</span>
                                <ArrowRightOutlined/>
                            </div>
                        </Link>
                    </div>
                    <div className={'my-6 grid grid-cols-1 md:grid-cols-3 gap-4'}>
                        {
                            RECOMMEND_WORK_LIST.map((item, index) => {
                                return (
                                    <a key={index} href={item.link} title={item.name}>
                                        <Card hoverable={true}>
                                            <div className={'flex mb-3'}>
                                                <div className={'flex-shrink-0 w-16 mr-3 relative'}>
                                                    <Image
                                                        layout={'fill'}
                                                        objectFit={'contain'}
                                                        alt={item.name}
                                                        src={item.logo ? item.logo : '/default.png'}
                                                    />
                                                </div>
                                                <div style={{width: 200}} className={'truncate'}>
                                                    <div className={'font-bold text-lg'}>{item.name}</div>
                                                    <div className={'truncate'}>{item.link}</div>
                                                </div>
                                            </div>
                                            <Meta
                                                description={
                                                    <div>
                                                        <div className={'truncate mb-2'}>{item.description}</div>
                                                        <div className={'w-full flex justify-between'}>
                                                            <Tag color={'#9CA3AF'}>{item.tag}</Tag>
                                                            <div>v {item.version}</div>
                                                        </div>
                                                    </div>
                                                }
                                            />
                                        </Card>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <Link className={'block md:hidden'} href={'/work'}>
                        <div
                            className={'bg-linear-color w-full h-12 rounded-full flex-center text-white font-semibold text-xl'}>
                            <span className={'mr-3'}>View All</span>
                            <ArrowRightOutlined/>
                        </div>
                    </Link>
                </section>
            </main>
        </>
    )
}
