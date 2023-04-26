import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import {Button} from "antd";
import React from "react";
import {useRouter} from "next/router";

const linkArr = [
    {
        name: '首页',
        link: '/'
    },
    {
        name: '项目',
        link: '/project'
    },
    {
        name: '博客',
        link: '/blog'
    }
]
const Header = () => {
    const router = useRouter()
    const getCurrentUrl = (key: any) => key == router.pathname

    return (
        <header className={'w-full flex justify-between items-center py-9'}>
            <div className={'flex-center'}>
                <Link href="/">
                    <h1 className="sr-only">鸢离</h1>
                    <Image
                        src={Logo}
                        alt="YuanLi"
                        width={55}
                    />
                </Link>
            </div>
            <div>
                <div className={'flex space-x-3'}>
                    {
                        linkArr.map((item, index) => {
                            return (
                                <Link key={index} href={item.link}>
                                    <Button type={getCurrentUrl(item.link) ? 'primary' : 'text'}>{item.name}</Button>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    );
}


export default Header