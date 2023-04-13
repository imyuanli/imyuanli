import LinearBtn from "@/components/linear-btn";
import {SendOutlined} from "@ant-design/icons";
import {Divider} from "antd";
import React from "react";
import {metadata} from "@/utils";
import Link from "next/link";

const socialLink = [
    {
        name: 'GitHub',
        href: metadata.github
    },
    {
        name: 'Gitee',
        href: metadata.gitee
    },
    {
        name: 'CSDN',
        href: metadata.csdn
    },
]

const Footer = () => {
    return (
        <footer className={'w-full'}>
            <div className={'flex justify-between items-center w-full'}>
                <div className={'text-xl'}>
                    有兴趣合作吗?
                </div>
                <a href={`mailto:${metadata.email}`}>
                    <LinearBtn w={'w-48'} icon={<SendOutlined/>} text={'给我发个邮件'}/>
                </a>
            </div>
            <Divider/>
            <div className={'mb-6 flex justify-center flex-col space-y-3 sm:justify-between sm:flex-row items-center'}>
                <div className="flex space-x-2 text-sm">
                    <div>{metadata.author}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <div>{` • `}</div>
                    <Link href={'/'}>{metadata.title}</Link>
                </div>
                <div className={'flex gap-4 text-[#6474a2]'}>
                    {
                        socialLink.map((item, index) => {
                            return (
                                <a target={'_blank'} key={index} href={item.href} className={'hover:underline'}>{item.name}</a>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    );
}


export default Footer