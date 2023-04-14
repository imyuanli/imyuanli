import React from "react";
import Btn from "@/components/btn";
import Link from "next/link";

interface props {
    title?: string,
    href?: any,
    children: any,
}

const Section: React.FunctionComponent<props> = ({title, href, children}) => {
    return (
        <section className={'mb-12'}>
            {title && <div className={'flex items-center justify-between mb-6'}>
              <div className={'text-2xl font-semibold'}>{title}</div>
              <Link className={''} href={href}>
                <Btn text={'全部博客'}/>
              </Link>
            </div>}
            {children}
        </section>
    );
}


export default Section