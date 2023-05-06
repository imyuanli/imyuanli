import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ConfigProvider, FloatButton} from "antd";
import {StyleProvider} from '@ant-design/cssinjs';
import React, {useEffect} from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {metadata} from "@/utils";
import {get_article_list, get_project_list} from "@/service/service";
import {useSetAtom} from "jotai";
import {articleAtom, projectAtom} from "@/store";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/zh-cn'

dayjs.extend(localizedFormat)

export default function App({Component, pageProps}: AppProps) {
    const setArticleList = useSetAtom(articleAtom);
    const setProjectList = useSetAtom(projectAtom);

    useEffect(() => {
        get_article_list().then((res: any) => {
            setArticleList(res['article_list'])
        })
        get_project_list().then((res: any) => {
            setProjectList(res['project_list'])
        })

    }, [])

    return (
        <StyleProvider hashPriority="high">
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: metadata.primaryColor,
                        colorLink: metadata.primaryColor,
                        colorInfo: metadata.primaryColor,
                        wireframe: false
                    }
                }}
            >
                <div className={'min-h-screen px-3 flex justify-center bg-[#f5fafa]'}>
                    <div className={'w-full max-w-screen-xl flex justify-between flex-col'}>
                        <Header/>
                        <main className="mb-auto">
                            <Component {...pageProps} />
                        </main>
                        <Footer/>
                    </div>
                </div>
                <FloatButton.BackTop visibilityHeight={100}/>
            </ConfigProvider>
        </StyleProvider>
    )
}
