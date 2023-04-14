import {Divider} from "antd";
import React from "react";
import {metadata} from "@/utils";
import Link from "next/link";

const socialLink = [
    {
        name: 'Email',
        href: `mailto:${metadata.email}`
    },
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
            <Divider/>
            <div className={'mb-6 flex justify-center flex-col space-y-3 sm:justify-between sm:flex-row items-center'}>
                <div className="flex space-x-2 text-sm">
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <div>{metadata.author}</div>
                    <div>{` • `}</div>
                    <Link href={'/'}>{metadata.title}</Link>
                </div>
                <div className={'flex gap-4 text-[#6474a2]'}>
                    {
                        socialLink.map((item, index) => {
                            return (
                                <a target={'_blank'} key={index} href={item.href}
                                   className={'hover:underline'}>{item.name}</a>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    );
}


export default Footer