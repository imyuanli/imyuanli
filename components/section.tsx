import React from "react";
import MyLink from "@/components/my-link";

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
              <MyLink href={href} text={'查看全部 →'} size={'large'} />
            </div>}
            {children}
        </section>
    );
}


export default Section