import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ConfigProvider} from "antd";
import {StyleProvider} from '@ant-design/cssinjs';
import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {metadata} from "@/utils";

export default function App({Component, pageProps}: AppProps) {
    return (
        <StyleProvider hashPriority="high">
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: metadata.primaryColor,
                        colorLink: metadata.primaryColor
                    }
                }}
            >
                <div className={'min-h-screen px-3 flex justify-center bg-[#F4F5F7]'}>
                    <div className={'w-full max-w-screen-xl flex justify-between flex-col'}>
                        <Header/>
                        <main className="mb-auto">
                            <Component {...pageProps} />
                        </main>
                        <Footer/>
                    </div>
                </div>
            </ConfigProvider>
        </StyleProvider>
    )
}
