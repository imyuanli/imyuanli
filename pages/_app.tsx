import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Layout, Button, ConfigProvider} from "antd";
import {StyleProvider} from '@ant-design/cssinjs';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from 'next/image'
import Logo from '../public/logo.png'
import {ArrowRightOutlined, GithubOutlined, SendOutlined} from "@ant-design/icons";
import React from "react";
import Btn from "@/components/btn";

const {Footer, Content} = Layout;
const navArr = [
    {
        name: '首页',
        key: '/'
    },
    {
        name: '作品',
        key: '/work'
    },
    {
        name: '博客',
        key: '/blog'
    },
    {
        name: '关于',
        key: '/about'
    },
]
export default function App({Component, pageProps}: AppProps) {
    const router = useRouter()
    const getCurrentUrl = (key: any) => {
        return key == router.pathname
    }
    return (
        <StyleProvider hashPriority="high">
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#13c2c2',
                },
            }}>
                <Layout className={'app-main flex-center'}>
                    <header className={'grid grid-cols-4 p-6 gap-3 justify-items-center w-full'}>
                        <Link href={'/'} className={'flex-center'}>
                            <Image
                                src={Logo}
                                alt="YuanLi"
                                width={60}
                            />
                            <span className={'text-2xl font-medium text-white'}>Yuan Li</span>
                        </Link>
                        <div className={'col-span-2 md:block hidden rounded-full bg-white p-3 shadow-md'}>
                            {
                                navArr.map((item, index) => {
                                    return (
                                        <Link key={index} href={item?.key}>
                                            <Button
                                                shape="round"
                                                className={'mx-2 font-bold'}
                                                type={getCurrentUrl(item?.key) ? 'primary' : 'text'}
                                            >
                                                {item.name}
                                            </Button>
                                        </Link>

                                    )
                                })
                            }
                        </div>
                        <div className={'flex-center '}>
                            <a href="https://github.com/imyuanli" className={'flex-center'}>
                                <GithubOutlined style={{fontSize: 18}}/>
                            </a>
                        </div>
                    </header>
                    <Content style={{maxWidth: 1200}} className={'w-full  px-6'}>
                        <Component {...pageProps} />
                    </Content>
                    <footer className={'w-full'}>
                        <div className={'flex justify-between items-center w-full p-24 bg-white shadow-lg'}>
                            <div className={'text-2xl'}>
                                有兴趣合作?
                            </div>
                            <a href="mailto:2865437316@qq.com?cc=yuanli" className={'hidden md:block'}>
                                <Btn text={'发一个邮件'} icon={<SendOutlined/>} w={'w-52'}/>
                            </a>
                        </div>
                        <div className={'py-6 px-24 '}>
                            © {new Date().getFullYear()} yuanli
                        </div>
                    </footer>
                </Layout>
            </ConfigProvider>
        </StyleProvider>
    )
}
