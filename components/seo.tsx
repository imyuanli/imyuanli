import Head from 'next/head'
import React from "react";
import {useRouter} from "next/router";
import {metadata} from "@/utils";

const Seo = ({title, description, keywords, ogType = 'website'}: any) => {
    const router = useRouter()
    const ogImage = metadata.siteUrl + '/favicon.ico'
    console.log("description",description)
    console.log("description",keywords)
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index"/>
            <meta name="keywords" content={`鸢离,yuanli,imyuanli,个人网站,我的作品,个人博客,YuanLi blog,${keywords}`}/>
            <meta name="description" content={description}/>
            <meta property="og:url" content={`${metadata.siteUrl}${router.asPath}`}/>
            <meta property="og:type" content={ogType}/>
            <meta property="og:site_name" content={metadata.title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:title" content={title}/>
            <meta property="og:image" content={ogImage} key={ogImage}/>
            <meta httpEquiv="Content-Type" content="text/html;charset=gb2312"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="360-site-verification" content="640d32949bba6deb803d4ae7659aefaf"/>
            <meta name="sogou_site_verification" content="cDJfCXqbDX"/>
            <meta name="baidu-site-verification" content="codeva-5fmdAxw1GK"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
}


export default Seo
