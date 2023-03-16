import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {StyleProvider} from '@ant-design/cssinjs';
import {Anchor, Button, Card, FloatButton, Tag, Timeline} from "antd";
import Image from 'next/image'
import Logo from '../public/logo.png'
import {ArrowRightOutlined, ClockCircleOutlined, CodeOutlined, GithubOutlined, SmileOutlined} from "@ant-design/icons";
import {DEFAULT_WORK_LIST} from "@/utils";
import Title from "@/components/title";
import Link from "next/link";
import SecondTitle from "@/components/second-title";

const {Meta} = Card;

const iconCss = {fontSize: 24, color: '#7611a6'}
const cardDetailArr = [
    {
        icon: <CodeOutlined style={iconCss}/>,
        title: '全栈开发',
        describe: "使用Django作为主要的后端框架"
    },
    {
        icon: <CodeOutlined style={iconCss}/>,
        title: '全栈开发',
        describe: "如果他很痛苦，他会/**/被认为是在帮忙，但我确实这么做了。"
    },
    {
        icon: <CodeOutlined style={iconCss}/>,
        title: '全栈开发',
        describe: "如果他很痛苦，他会被认为是在帮忙，但我确实这么做了。"
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
                <section className={'flex-center flex-col mb-6'}>
                    <Title
                        title={'Hello, my name is Jeanine White'}
                        describe={'I am a Creative Developer who is currently based in Portland, Oregon.'}
                    />
                    <Card className={'shadow-md w-full'}>
                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                            {
                                cardDetailArr.map((item, index) => {
                                    return (
                                        <div key={index} className={'mb-3 md:mb-0'}>
                                            <div className={'mb-1'}>
                                                {item.icon}
                                            </div>
                                            <div className={'text-2xl font-bold mb-1'}>
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
                <section>
                    <div className={'flex justify-between items-center'}>
                        <SecondTitle
                            title={'Selected Work'}
                            describe={'Take a look below at some of my featured work for clients from the past few years.'}
                        />
                        <Link className={'hidden md:block'} href={'/work'}>
                            <div
                                style={{background: 'linear-gradient(150deg,#ca7879,#7611a6,#1c0056)'}}
                                className={'w-48 h-14 rounded-full flex-center text-white font-semibold text-xl'}
                            >
                                <span>View All</span>
                                <ArrowRightOutlined/>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div>

                        </div>
                    </div>
                    <Link className={'block md:hidden'} href={'/work'}>
                        <div
                            style={{background: 'linear-gradient(150deg,#ca7879,#7611a6,#1c0056)'}}
                            className={'w-full h-12 rounded-full flex-center text-white font-semibold text-xl'}
                        >
                            <span>View All</span>
                            <ArrowRightOutlined/>
                        </div>
                    </Link>
                </section>
            </main>
        </>
    )
}
