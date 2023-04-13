import {Card, Tag} from "antd";
import Image from "next/image";
import React from "react";

interface props {
    workItem: any,
}

const {Meta} = Card;
const WorkCard: React.FunctionComponent<props> = ({workItem}) => {
    const {name, logo, link, description, tag, version} = workItem
    return (
        <a href={link} title={name}>
            <Card
                hoverable={true}
                className={'shadow-md'}
            >
                <div className={'flex mb-6'}>
                    <div className={'flex-shrink-0 w-16 mr-3 relative'}>
                        <Image
                            layout={'fill'}
                            objectFit={'contain'}
                            alt={name}
                            src={logo ? logo : '/default.png'}
                        />
                    </div>
                    <div style={{width: 200}} className={'truncate'}>
                        <div className={'font-bold text-lg'}>{name}</div>
                        <div className={'truncate'}>{link}</div>
                    </div>
                </div>
                <Meta
                    description={
                        <div>
                            <div className={'truncate mb-3'}>{description}</div>
                            <div className={'w-full flex justify-between'}>
                                <Tag color={'#9CA3AF'}>{tag}</Tag>
                                <div>v {version}</div>
                            </div>
                        </div>
                    }
                />
            </Card>
        </a>
    );
}


export default WorkCard