import Link from "next/link";
import React from "react";
import MyLink from "@/components/my-link";

interface props {
    article: any,
}

const ArticleCard: React.FunctionComponent<props> = ({article}) => {
    const {id, title, content, tag, createAt} = article
    return (
        <div className={'grid grid-cols-1 md:grid-cols-4'}>
            <div className={'flex items-baseline text-gray-500 space-x-3 mb-3'}>
                <div>{createAt}</div>
                <div>{` • `}</div>
                <MyLink href={'href'} text={tag} />
            </div>
            <div className={'col-span-3'}>
                <Link
                    href={`/article/${id}`}
                    className={'text-xl font-semibold mb-6 title-underline line-clamp-1'}
                >
                    <span>{title}</span>
                </Link>
                <div className={'text-gray-500  line-clamp-3 mb-3'}>
                    {content}
                </div>
                <div className={'mt-auto w-full flex justify-end'}>
                    <MyLink href={'href'} text={'继续阅读'} />
                </div>
            </div>
        </div>
    );
}


export default ArticleCard