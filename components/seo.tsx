import {Head} from "next/document";
import {useRouter} from "next/router";
import {SITE_META_DATA} from "@/constants";

export const CommonSEO = ({title, description, ogType, ogImage, twImage, canonicalUrl}: any) => {
    const router = useRouter()
    return (
        //
        // <Head>
        //     <title>{title}</title>
        //
        //     <meta name="robots" content="follow, index"/>
        //     <meta name="description" content={description}/>
        //     {/*<meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`}/>*/}
        //     {/*<meta property="og:type" content={ogType}/>*/}
        //     {/*<meta property="og:site_name" content={siteMetadata.title}/>*/}
        //     {/*<meta property="og:description" content={description}/>*/}
        //     {/*<meta property="og:title" content={title}/>*/}
        //     {/*{ogImage.constructor.name === 'Array' ? (*/}
        //     {/*    ogImage.map(({url}) => <meta property="og:image" content={url} key={url}/>)*/}
        //     {/*) : (*/}
        //     {/*    <meta property="og:image" content={ogImage} key={ogImage}/>*/}
        //     {/*)}*/}
        //     {/*<meta name="twitter:card" content="summary_large_image"/>*/}
        //     {/*<meta name="twitter:site" content={siteMetadata.twitter}/>*/}
        //     {/*<meta name="twitter:title" content={title}/>*/}
        //     {/*<meta name="twitter:description" content={description}/>*/}
        //     {/*<meta name="twitter:image" content={twImage}/>*/}
        //     {/*<link*/}
        //     {/*    rel="canonical"*/}
        //     {/*    href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${router.asPath}`}*/}
        //     {/*/>*/}
        // </Head>
        <Head>
            <title> {title && `${title}-`}鸢离</title>
            <meta name="robots" content="follow, index"/>
            <meta name="keywords" content="鸢离,yuanli,imyuanli,个人网站,我的作品"/>
            <meta name="description" content="鸢离,yuanli,imyuanli,个人网站,我的作品,这里是鸢离的个人网站,包含了我的部分作品及网站的动态,网站首页"/>
            <meta httpEquiv="Content-Type" content="text/html;charset=gb2312"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {/*og*/}
            <meta property="og:title" content={`${title ?title+'-':"鸢离"}`}/>
            {/*网站管理seo*/}
            <meta name="360-site-verification" content="640d32949bba6deb803d4ae7659aefaf"/>
            <meta name="sogou_site_verification" content="cDJfCXqbDX"/>
            <meta name="baidu-site-verification" content="codeva-5fmdAxw1GK"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

export const PageSEO = ({title, description}: any) => {
    // const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
    // const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
    return (
        <CommonSEO
            title={title}
            description={description}
            ogType="website"
            // ogImage={ogImageUrl}
            // twImage={twImageUrl}
        />
    )
}