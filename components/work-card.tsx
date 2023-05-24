import {Button, Card, Tag} from "antd";
import Image from "next/image";
import React from "react";
import {IMG_URL, metadata} from "@/utils";
import Link from "next/link";
import {GithubOutlined, LinkOutlined} from "@ant-design/icons";

interface props {
    workItem: any,
}

const {Meta} = Card;
const WorkCard: React.FunctionComponent<props> = ({workItem}) => {
    const {name, description, keyword, tag, version, powered_by} = workItem
    const link = () => `https://${keyword}.imyuanli.cn/`
    return (
        <Link href={link()} title={name}>
            <Card
                hoverable={true}
                className={'shadow-md relative group'}
                cover={<div className={'relative h-[220px] w-full'}>
                    <Image
                        layout={'fill'}
                        objectFit={'cover'}
                        loading={'lazy'}
                        alt={name}
                        src={`${IMG_URL}/home/screenshot/${keyword}.jpg`}
                    />
                    <div
                        className={'absolute left-2 bottom-2 bg-white w-9 h-9 rounded-full flex justify-center items-center shadow-lg'}>
                        <Link href={powered_by?.link} target={'_blank'}>
                            <Image
                                objectFit={'contain'}
                                alt={name}
                                height={24}
                                width={24}
                                src={`${IMG_URL}/home/framework_logo/${powered_by?.value}`}
                            />
                        </Link>
                    </div>
                </div>}
            >
                <div className={'flex mb-6'}>
                    <div className={'flex-shrink-0 w-16 mr-3 relative'}>
                        <Image
                            layout={'fill'}
                            objectFit={'contain'}
                            alt={name}
                            src={'/default.png'}
                        />
                    </div>
                    <div style={{width: 200}} className={'truncate'}>
                        <div className={'font-bold text-lg'}>{name}</div>
                        <div className={'truncate'}>{link()}</div>
                    </div>
                </div>
                <Meta description={<div className={'space-y-3'}>
                    <div className={'truncate'}>{description}</div>
                    <div className={'w-full flex justify-between items-center'}>
                        <Tag color={'#9CA3AF'}>{tag}</Tag>
                        <div className={'space-x-2'}>
                            <Link
                                href={`${metadata.github}/${keyword}`}
                                target={'_blank'}
                                title={name}
                                className={'text-gray-500'}
                            >
                                <Button
                                    shape="circle"
                                    icon={<GithubOutlined style={{display: 'block'}}/>}
                                    className={'flex justify-center items-center'}
                                />
                            </Link>
                            <span className={'text-sm'}>v {version}</span>
                        </div>
                    </div>
                </div>}/>
                <div className={'hidden group-hover:block'}>
                    <div className={'absolute -right-3 -top-3'}>
                        <Link href={link()} target={'_blank'} title={name}>
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<LinkOutlined style={{display: 'block'}}/>}
                                className={'flex justify-center items-center'}
                            />
                        </Link>
                    </div>
                </div>
            </Card>
        </Link>
    );
}


export default WorkCard