import React from "react";
import LinearBtn from "@/components/linear-btn";
import Link from "next/link";
import {ArrowRightOutlined} from "@ant-design/icons";

interface props {
    title?: string,
    href?: any,
    children: any,
}

const Section: React.FunctionComponent<props> = ({title, href, children}) => {
    return (
        <section className={'mb-12'}>
            {title && <div className={'flex items-center justify-center sm:justify-between mb-6'}>
              <div className={'text-center md:text-left'}>
                <div className={'text-2xl font-bold'}>{title}</div>
              </div>
              <Link className={'hidden sm:block'} href={href}>
                <LinearBtn w={'w-48'} text={'查看全部'} icon={<ArrowRightOutlined/>}/>
              </Link>
            </div>}
            {children}
            {title && <Link className={'block sm:hidden mt-3'} href={href}>
              <LinearBtn w={'w-full'} text={'查看全部'} icon={<ArrowRightOutlined/>}/>
            </Link>}
        </section>
    );
}


export default Section