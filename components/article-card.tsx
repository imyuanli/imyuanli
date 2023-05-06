import Link from "next/link";
import React from "react";
import MyLink from "@/components/my-link";
import TimeClassify from "@/components/time-classify";
import {Card} from "antd";

interface props {
    article: any,
    isBlog?: Boolean,
    inputValue?: any
}

const ArticleCard: React.FunctionComponent<props> = ({article, isBlog, inputValue}) => {
    const {article_id, title, describe, classify_value, create_time, view_count} = article

    const textHighLight = (value: string) => {
        if (value.indexOf(inputValue) !== -1 && inputValue !== '') {
            return value.replace(inputValue, `<font color={'green'}>${inputValue}</font>`)
        }
        return value
    }

    return (
        <Card className={'shadow-md'}>
            <div className={`${isBlog ? '' : 'grid grid-cols-1 md:grid-cols-4'}`}>
                <TimeClassify create_time={create_time} classify_value={classify_value} view_count={view_count}/>
                <div className={'mt-3 col-span-3'}>
                    <Link
                        href={`/blog/${article_id}`}
                        className={'text-xl font-semibold mb-3 title-underline line-clamp-1'}
                    >
                        <span dangerouslySetInnerHTML={{__html: textHighLight(title)}}/>
                    </Link>
                    <div className={'text-gray-500  line-clamp-3 mb-3'}>
                        <span dangerouslySetInnerHTML={{__html: textHighLight(describe)}}/>
                    </div>
                    <div className={'mt-auto w-full flex justify-end'}>
                        <MyLink href={`/blog/${article_id}`} text={'继续阅读'}/>
                    </div>
                </div>
            </div>
        </Card>
    );
}


export default ArticleCard