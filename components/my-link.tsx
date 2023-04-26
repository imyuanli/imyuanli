import {Button} from "antd";
import Link from "next/link";
import React from "react";

interface props {
    href: string,
    text: any,
    size?: any
}

const MyLink: React.FunctionComponent<props> = ({href, size, text}) => {
    return (
        <Button style={{padding:0}} size={size} type="link">
            <Link href={href} className={'whitespace-pre-wrap inline-block'}>
                {text}
            </Link>
        </Button>
    );
}


export default MyLink