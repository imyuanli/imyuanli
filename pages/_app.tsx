import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Button, ConfigProvider, Divider} from "antd";
import {StyleProvider} from '@ant-design/cssinjs';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from 'next/image'
import Logo from '../public/logo.png'
import {GithubOutlined, SendOutlined} from "@ant-design/icons";
import React from "react";
import {navigation} from "@/utils";
import LinearBtn from "@/components/linear-btn";


export default function App({Component, pageProps}: AppProps) {
    const router = useRouter()
    const getCurrentUrl = (key: any) => {
        return key == router.pathname
    }
    return (
        <StyleProvider hashPriority="high">
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#2EBEF3FF',
                },
            }}>
                <div className={'min-h-screen font-sans px-3'}>
                    <header  className="absolute inset-x-0 top-0 z-50">
                        <nav className="flex items-center justify-center sm:justify-between py-6 px-9" aria-label="Global">
                            <div className="hidden sm:flex flex-1">
                                <Link href="/">
                                    <h1 className="sr-only">鸢离</h1>
                                    <Image
                                        src={Logo}
                                        alt="YuanLi"
                                        width={55}
                                    />
                                </Link>
                            </div>
                            <div className={'flex-center flex-wrap rounded-full p-2 shadow-lg bg-[#fff]'}>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name} href={item.href}
                                    >
                                        <Button
                                            shape="round"
                                            className={'mx-2 font-bold'}
                                            type={getCurrentUrl(item?.href) ? 'primary' : 'text'}
                                        >
                                            {item.name}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                            <div className="hidden sm:flex flex-1 justify-end">
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    <GithubOutlined style={{fontSize: 35}}/>
                                </a>
                            </div>
                        </nav>
                    </header>
                    <div className="pt-20">
                        <div
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FFFC9FFF] to-[#2EBEF3FF] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="mx-auto max-w-screen-xl	py-12">
                            <div className={'w-full max-w-screen-xl'}>
                                <Component {...pageProps} />
                            </div>
                        </div>
                        <div
                            className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FFFC9FFF] to-[#2EBEF3FF] opacity-30 sm:left-[calc(50%)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </StyleProvider>
    )
}
