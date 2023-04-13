import Link from "next/link";
import React from "react";

interface props {
    article: any,
}

const ArticleCard: React.FunctionComponent<props> = ({article}) => {
    const {id, title, content, tag, createAt} = article
    return (
        <div className={'flex flex-col'}>
            <div className={'flex items-center text-gray-500 mb-3 space-x-3'}>
                <div>{createAt}</div>
                <div>{` • `}</div>
                <Link className={'text-highlight'} href={'link'}>
                    {tag}
                </Link>
            </div>
            <Link
                href={`/article/${id}`}
                className={'text-xl font-semibold mb-3 text-highlight title-underline line-clamp-2'}
            >
                <span>{title}</span>
            </Link>
            <div className={'mb-6 text-gray-500  line-clamp-3'}>
                {content}
            </div>
            <div className={'mt-auto flex justify-end'}>
                <Link className={'text-highlight'} href={`/article/${id}`}>
                    Read more →
                </Link>
            </div>
        </div>
    );
}


export default ArticleCard