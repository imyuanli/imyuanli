import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Anchor, Button, Card, FloatButton, Tag, Timeline} from "antd";
import Image from 'next/image'
import Logo from '../public/logo.png'
import {ClockCircleOutlined, GithubOutlined, SmileOutlined} from "@ant-design/icons";
import {DEFAULT_WORK_LIST} from "@/utils";
import Title from "@/components/title";

const {Meta} = Card;
export default function Home() {
    const getBtn = (text: string) => (
        <Button type="text" size={'large'}>{text}</Button>
    )
    const sectionClass = 'py-24 flex-center flex-col px-12'
    return (
        <>
            <Head>
                <title>鸢离</title>
                <meta name="keywords" content="鸢离,yuanli,imyuanli,个人网站,我的作品"/>
                <meta name="description" content="这里是鸢离的个人网站,包含了我的部分作品及网站的动态"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="baidu-site-verification" content="codeva-jSz63asSGl" />
                <meta name="360-site-verification" content="640d32949bba6deb803d4ae7659aefaf" />
                <meta name="sogou_site_verification" content="0uSzFwTLGI" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={'min-h-screen w-full text-lg relative overflow-hidden'}>
                <header
                    className={`fixed bg-white-200 shadow-lg backdrop-blur-md backdrop-saturate-150 w-full z-10 flex-center h-20`}>
                    <div className={`${styles.headerContent} flex justify-between`}>
                        <div className={'flex-center'}>
                            <Image
                                src={Logo}
                                alt="YuanLi"
                                width={60}
                            />
                        </div>
                        <div className={'flex-center'}>
                            <Anchor
                                direction="horizontal"
                                items={[
                                    {
                                        key: 'work',
                                        href: '#work',
                                        title: getBtn('作品'),
                                    },
                                    {
                                        key: 'log',
                                        href: '#log',
                                        title: getBtn('日志'),
                                    }
                                ]}
                                className={'text-white'}
                            />
                            <a href="https://github.com/imyuanli">
                                <Button
                                    type={'text'}
                                    size={'large'}
                                    className={'ml-3 flex-center'}
                                    icon={<GithubOutlined style={{fontSize: 18}}/>}
                                />
                            </a>
                        </div>
                    </div>
                </header>
                <section id={'work'} className={`bg-gray-100 ${sectionClass} py-32`}>
                    <Title text={'我的作品'}/>
                    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'}>
                        {
                            DEFAULT_WORK_LIST.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <a href={item.link} title={item.name}>
                                            <Card
                                                hoverable={true}
                                                style={{
                                                    maxWidth: 350,
                                                }}
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
                                                    <div style={{width: 200}}>
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

                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section id={'log'} className={`bg-white ${sectionClass} py-12`}>
                    <Title text={'网站日志'}/>
                    <Timeline
                        mode="alternate"
                        className={'w-full'}
                        items={[
                            {
                                color: '#00CCFF',
                                dot: <SmileOutlined style={{fontSize: 22}}/>,
                                children: <p>TO BE CONTINUED...</p>,
                            },

                            {
                                label: '2023-2-22',
                                dot: <ClockCircleOutlined/>,
                                children: <p>woodBox更换名称及域名 aTools 1.0 上线</p>,
                            },
                            {
                                label: '2023-12-23',
                                children: <p>woodBox Beta版 上线</p>,
                            },
                            {
                                label: '2022-12-11',
                                dot: <ClockCircleOutlined/>,
                                children: <p>鸢离起始页更换架构并更名为mini起始页</p>,
                            },
                            {
                                label: '2022-10-8',
                                dot: <ClockCircleOutlined/>,
                                children: <p>博客 1.0 上线</p>,
                            },
                            {
                                label: '2022-9-24',
                                children: <p>前端所有网站交由vercel托管,全域开启HTTPS</p>,
                            },
                            {
                                label: '2022-9-4',
                                dot: <ClockCircleOutlined style={{fontSize: '16px'}}/>,
                                children: <p>简历生成 1.0 上线</p>,
                            },
                            {
                                label: '2022-8-11',
                                color: 'gray',
                                children: <p>鸢离起始页 1.0 上线</p>,
                            },
                            {
                                label: '2022-7-30',
                                color: 'gray',
                                children: <p>续费新服务器,续费域名，构思新项目 鸢离起始页</p>,
                            },
                            {
                                label: '2021-12-11',
                                color: 'red',
                                children: <p>服务器到期，网站停更。</p>,
                            },
                            {
                                label: '2021-8-19',
                                color: 'gray',
                                children: <p>鸢离主页2.0上线</p>,
                            },
                            {
                                label: '2021-2-5',
                                color: 'gray',
                                children: <p>更换后端架构，鸢离主页新增多个功能模块，并正式发布1.0</p>,
                            },
                            {
                                label: '2020-12-11',
                                color: 'gray',
                                children: <p>注册域名，鸢离主页Beta 正式上线</p>,
                            },
                        ]}
                    />
                </section>
                <footer className={`w-full flex-center bg-gray-100 p-3`}>
                    © {new Date().getFullYear()} 鸢离
                </footer>
                <FloatButton.BackTop type={'primary'} visibilityHeight={80}/>
            </main>
        </>
    )
}
