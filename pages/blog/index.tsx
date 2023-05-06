import Title from "@/components/title";
import {metadata} from "@/utils";
import ArticleCard from "@/components/article-card";
import React from "react";
import {useAtomValue} from "jotai";
import {articleAtom} from "@/store";
import Loading from "@/components/loading";
import Seo from "@/components/seo";

const Blog = () => {
    const articleList: any = useAtomValue(articleAtom);
    return (
        <>
            <Seo
                title={'博客 - ' + metadata.title}
                description={'这是鸢离的个人技术博客,'}
                keywords={'博客,Blog,个人博客，技术博客'}
            />
            <main>
                <Title value={'博客'} />
                <div className={'col-span-3'}>
                    {
                        articleList ?
                            <div className={'grid grid-cols-1 gap-6'}>
                                {articleList.map((item: any) => {
                                    return (
                                        <ArticleCard key={item.id} article={item}/>
                                    )
                                })}
                            </div>
                            :
                            <Loading/>
                    }
                </div>
            </main>
        </>

    );
}


export default Blog