import Head from 'next/head'
import {Card, Divider, Tag} from "antd";
import Image from 'next/image'
import {
    CodeOutlined,
    CustomerServiceOutlined,
    ExperimentOutlined,
    ManOutlined, SendOutlined,
    ToolOutlined
} from "@ant-design/icons";
import {DEFAULT_WORK_LIST} from "@/utils";
import React from "react";
import LinearBtn from "@/components/linear-btn";

const {Meta} = Card;

const iconCss = {fontSize: 26, color: '#2EBEF3FF'}
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
        icon: <ExperimentOutlined style={iconCss}/>,
        title: '极简设计',
        describe: "享受简约的设计,Simple but not simple"
    },
]
const linkArr = [
    {
        name:'GitHub',
        href:'https://github.com/imyuanli'
    },
    {
        name:'Gitee',
        href:'https://gitee.com/imyuanli'
    },
    {
        name:'CSDN',
        href:'https://blog.csdn.net/qq_44259670'
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
                <section className={'flex-center flex-col'}>
                    <div className={'text-3xl font-bold mb-3'}>Hello，我是鸢离</div>
                    <div className={'text-lg  text-gray-600 mb-3'}>一名前端开发工程师</div>
                    <div>
                        <Tag icon={<ManOutlined/>} color="#2EBEF3FF">
                            00后
                        </Tag>
                        <Tag icon={<ToolOutlined/>} color="#2EBEF3FF">
                            Developer
                        </Tag>
                        <Tag icon={<CustomerServiceOutlined/>} color="#2EBEF3FF">
                            Music
                        </Tag>
                    </div>
                </section>
                <section className={'my-12 flex-center flex-col my-12'}>
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
                            <div className={'text-2xl font-bold'}>我的作品</div>
                        </div>

                    </div>
                    <div className={'my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'}>
                        {
                            DEFAULT_WORK_LIST.map((item, index) => {
                                return (
                                    <a key={index} href={item.link} title={item.name}>
                                        <Card
                                            hoverable={true}
                                            className={'shadow-md'}
                                        >
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
                </section>
                <footer className={'w-full'}>
                    <div className={'flex justify-between items-center w-full'}>
                        <div className={'text-xl'}>
                            有兴趣合作吗?
                        </div>
                        <a href="mailto:2865437316@qq.com">
                            <LinearBtn w={'w-48'} icon={<SendOutlined />} text={'给我发个邮件'}/>
                        </a>
                    </div>
                    <Divider />
                    <div className={'mb-6 flex justify-between items-center'}>
                        <div>© {new Date().getFullYear()} 鸢离</div>
                        <div className={'flex gap-4 text-[#6474a2]'}>
                            {
                                linkArr.map((item,index)=>{
                                    return(
                                        <a key={index} href={item.href} className={'hover:underline'}>{item.name}</a>
                                    )
                                })
                            }

                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}
