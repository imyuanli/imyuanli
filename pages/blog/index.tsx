import Title from "@/components/title";
import {metadata} from "@/utils";
import ArticleCard from "@/components/article-card";
import React, {useEffect, useState} from "react";
import {useAtomValue} from "jotai";
import {articleAtom, classifyAtom} from "@/store";
import Loading from "@/components/loading";
import Seo from "@/components/seo";
import {Card, Input, List, Divider} from "antd";
import MyLink from "@/components/my-link";
import {useRouter} from "next/router";
import {SearchOutlined} from "@ant-design/icons";
import {useSetState} from "ahooks";

const Blog = () => {
    const articleList: any = useAtomValue(articleAtom);
    const classifyList: any = useAtomValue(classifyAtom);

    const [state, setState] = useSetState<any>({
        curClassify: null,
        allArticle: null,
        inputValue: '',
    })
    //分类
    const {query} = useRouter()
    const {currentClassify, allArticle, inputValue} = state
    useEffect(() => {
        if (inputValue) {
            const res1 = allArticle.filter((item: any) => item.title.toLowerCase().indexOf(inputValue) > -1)
            const res2 = allArticle.filter((item: any) => item.describe.toLowerCase().indexOf(inputValue) > -1)
            const res = Array.from(new Set([...res1, ...res2]))
            if (res.length > 0) {
                setState({
                    allArticle: [...res],
                })
            }
        } else {
            const res = query.classify
            if (res && articleList && classifyList) {
                setState({
                    currentClassify: classifyList.find((item: any) => item.classify_value == res),
                    allArticle: articleList.filter((item: any) => item.classify_value == res),
                })
            } else {
                setState({
                    currentClassify: null,
                    allArticle: articleList,
                })
            }
        }
    }, [query, articleList, inputValue])

    //获取当前名称
    const getCurName = () => currentClassify ? currentClassify?.classify_label : '博客'

    //搜索相关
    const handleSearchArticle = (e: any) => {
        setState({
            inputValue: e.target.value
        })
    }

    return (
        <>
            <Seo
                title={getCurName() + '-' + metadata.title}
                description={'这是鸢离的个人技术博客,'}
                keywords={'博客,Blog,个人博客，技术博客'}
            />
            <main>
                <Title value={getCurName()}>
                    <Input
                        placeholder="搜索博客"
                        size={'large'}
                        suffix={<SearchOutlined/>}
                        onChange={handleSearchArticle}
                    />
                </Title>
                {
                    allArticle && classifyList ?
                        <div className={'grid grid-cols-4 gap-6'}>
                            <div className={'md:col-span-3 col-span-4 space-y-6'}>
                                {allArticle?.map((item: any) => {
                                    return (
                                        <ArticleCard inputValue={inputValue} isBlog={true} key={item.id}
                                                     article={item}/>
                                    )
                                })}
                            </div>
                            <div className={'hidden md:block col-span-1 space-y-6'}>
                                <Card className={'shadow-md'} title={'分类'}>
                                    <List.Item>
                                        <MyLink
                                            href={`/blog`}
                                            text={'全部'}
                                        />
                                        ({articleList.length})
                                    </List.Item>
                                    <Divider style={{margin: '12px 0'}}/>
                                    <List
                                        dataSource={classifyList}
                                        renderItem={(item: any) => {
                                            return (
                                                <List.Item>
                                                    <MyLink
                                                        href={`/blog?classify=${item.classify_value}`}
                                                        text={item.classify_label}
                                                    />
                                                    ({item.classify_sum})
                                                </List.Item>
                                            )
                                        }}
                                    />
                                </Card>
                            </div>
                        </div>
                        :
                        <Loading/>
                }
            </main>
        </>

    );
}


export default Blog