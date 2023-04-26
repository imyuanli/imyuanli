import {Divider, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Title from "@/components/title";
import {test_article} from "@/utils";
import ArticleCard from "@/components/article-card";
import React from "react";
import {useAtomValue} from "jotai";
import {articleAtom} from "@/store";
import Loading from "@/components/loading";

const Blog = () => {
    const articleList: any = useAtomValue(articleAtom);
    return (
        <div>
            <Title value={'博客'}>
                {/*<Input*/}
                {/*    placeholder="Basic usage"*/}
                {/*    size={'large'}*/}
                {/*    suffix={<SearchOutlined/>}*/}
                {/*/>*/}
            </Title>
            <div className={'space-y-20'}>
                {
                    articleList ?
                        <div className={'grid grid-cols-1  gap-6'}>
                            {articleList.map((item: any, index: any) => {
                                return (
                                    <div key={index}>
                                        <ArticleCard article={item}/>
                                        {articleList.length - 1 !== index && < Divider/>}
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <Loading/>
                }
            </div>
        </div>
    );
}


export default Blog