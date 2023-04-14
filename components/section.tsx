import React from "react";
import {Button} from "antd";

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
              <Button size={'large'} type="link" href={href}>
                查看全部 →
              </Button>
            </div>}
            {children}
        </section>
    );
}


export default Section