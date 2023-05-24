import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ConfigProvider, FloatButton} from "antd";
import {StyleProvider} from '@ant-design/cssinjs';
import React, {useEffect} from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {metadata} from "@/utils";
import {get_article_list, get_classify_list, get_project_list} from "@/service/service";
import {useSetAtom} from "jotai";
import {articleAtom, classifyAtom, projectAtom} from "@/store";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/zh-cn'

dayjs.extend(localizedFormat)

export default function App({Component, pageProps}: AppProps) {
    const setArticleList = useSetAtom(articleAtom);
    const setProjectList = useSetAtom(projectAtom);
    const setClassifyList = useSetAtom(classifyAtom);

    //根据框架的key找到对应的图片
    const powerOptions = [
        {
            key: 'umi',
            value: 'umi.png',
            link: 'https://umijs.org/zh-CN/docs/getting-started',
        },
        {
            key: 'react',
            value: 'react.svg',
            link: 'https://react.docschina.org',
        },
        {
            key: 'next',
            value: 'next.svg',
            link: 'https://nextjs.org/docs/getting-started',
        },
        {
            key: 'remix',
            value: 'remix.png',
            link: 'https://remix.run',
        },
        {
            key: 'taro',
            value: 'Taro',
            link: 'https://taro-docs.jd.com/taro/docs',
        },
        {
            key: 'uni',
            value: 'uni.png',
            link: 'https://uniapp.dcloud.io',
        },
        {
            key: 'vue',
            value: 'vue.svg',
            link: 'https://cn.vuejs.org/guide/introduction.html',
        },
        {
            key: 'nuxt',
            value: 'nuxt.svg',
            link: 'https://v2.nuxt.com/docs/get-started/installation',
        },
        {
            key: 'other',
            value: 'other',
            link: null
        },
    ]

    const power = (key: string) => powerOptions.find(item => item.key === key)

    useEffect(() => {
        get_article_list().then((res: any) => {
            setArticleList(res['article_list'])
        })
        get_project_list().then((res: any) => {
            const list = res['project_list'].map((item: any) => {
                const powerItem = power(item.powered_by)
                return {
                    ...item,
                    powered_by: {
                        ...powerItem
                    }
                }
            })
            setProjectList(list)
        })
        get_classify_list().then((res: any) => {
            setClassifyList(res['classify_list'])
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
