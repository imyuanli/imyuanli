import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {get_article} from "@/service/service";
import Loading from "@/components/loading";
import {Button, Card, Divider, Tooltip} from "antd";
import Catalog from "@/components/catalog";
import TimeClassify from "@/components/time-classify";
import {AimOutlined, ArrowLeftOutlined, MessageOutlined, ShareAltOutlined, StopOutlined} from "@ant-design/icons";
import MyLink from "@/components/my-link";


const Article = () => {
    const router = useRouter()
    const {id} = router.query
    const [text, setText] = useState('hello md-editor-rt！');
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState<any>(false)
    const {
        title,
        describe,
        classify_value,
        preview_theme,
        code_theme,
        view_count,
        create_time,
        next_article,
        pre_article
    } = data
    useEffect(() => {
        if (id) {
            setLoading(true)
            get_article({article_id: id})
                .then((res: any) => {
                    if (res) {
                        setData({...res.article})
                        setText(res.article.content)
                        setLoading(false)
                    }
                })
                .catch(() => {
                    setLoading(false)
                })
        }
    }, [id])

    const [isFixed, setIsFixed] = useState<any>(false)
    const pageView: any = useRef(null);
    useEffect(() => {
        const fixedTop = pageView.current.offsetTop;
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop;
            setIsFixed(scrollTop > fixedTop)
        })
    }, [])

    return (
        <div>
            {
                loading ?
                    <Loading/>
                    :
                    <div className={'grid grid-cols-4 gap-3'}>
                        <div className={'fixed -ml-16 top-40 flex flex-col space-y-3'}>
                            <>
                                <Button
                                    className={'flex-center'}
                                    size={'large'}
                                    shape={'circle'}
                                    icon={<MessageOutlined/>}
                                />
                                <Button
                                    className={'flex-center'}
                                    size={'large'}
                                    shape={'circle'}
                                    icon={<ShareAltOutlined/>}
                                />
                                <Button
                                    className={'flex-center'}
                                    size={'large'}
                                    shape={'circle'}
                                    icon={<ArrowLeftOutlined/>}
                                />
                            </>
                            <Tooltip title="沉浸阅读" placement={'bottom'}>
                                <Button
                                    className={'flex-center'}
                                    size={'large'}
                                    shape={'circle'}
                                    icon={<AimOutlined/>}
                                />
                            </Tooltip>
                        </div>
                        <Card className={'col-span-3'}>
                            <div className={'flex-center flex-col space-y-3'}>
                                <div className={'text-4xl font-bold'}>{title}</div>
                                <TimeClassify
                                    create_time={create_time}
                                    classify_value={classify_value}
                                    view_count={view_count}
                                />
                            </div>
                            <div>
                                <div className={'col-span-4'}>
                                    <MdEditor
                                        editorId={'pre'}
                                        modelValue={text}
                                        onChange={setText}
                                        previewOnly={true}
                                        showCodeRowNumber={true}
                                        previewTheme={preview_theme}
                                        codeTheme={code_theme}
                                        style={{
                                            borderRadius: 8
                                        }}
                                    />
                                </div>
                            </div>
                        </Card>
                        <div className={'col-span-1'}>
                            <div ref={pageView}
                                 className={`space-y-3 max-w-[240px] ${isFixed ? 'fixed top-3' : 'static'}`}>
                                <Catalog/>
                                {
                                    pre_article &&
                                  <Card title={'上一篇'}>
                                    <MyLink href={`/blog/${pre_article.article_id}`} text={pre_article.title}/>
                                  </Card>
                                }
                                {
                                    next_article &&
                                  <Card title={'下一篇'}>
                                    <MyLink href={`/blog/${next_article.article_id}`} text={next_article.title}/>
                                  </Card>
                                }

                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}


export default Article