import {Divider} from "antd";
import {EyeOutlined, MessageOutlined} from "@ant-design/icons";
import Link from "next/link";
import Title from "@/components/title";
import {test_article} from "@/utils";
import ArticleCard from "@/components/article-card";
import React from "react";

const Blog = () => {
    return (
        <div>
            <Title value={'全部文章'}/>
            <div className={'space-y-20'}>
                <div className={'grid grid-cols-1  gap-6'}>
                    {test_article.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <ArticleCard article={item}/>
                                {
                                    test_article.length - 1 !== index && < Divider/>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}


export default Blog