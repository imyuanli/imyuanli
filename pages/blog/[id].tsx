import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {get_article} from "@/service/service";
import Loading from "@/components/loading";
import {Divider} from "antd";
import dayjs from "dayjs";

import dynamic from 'next/dynamic'

const DynamicCatalog = dynamic(() => import('../../components/catalog'), {
    loading: () => <Loading/>
})

const Article = () => {
    const router = useRouter()
    const {id} = router.query
    const [text, setText] = useState('hello md-editor-rt！');
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState<any>(false)
    const {title, describe, classify_value, preview_theme, code_theme, view_count, create_time} = data
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
            setIsFixed(scrollTop >= fixedTop)
        })
    }, [])

    return (
        <div>
            {
                loading ?
                    <Loading/>
                    :
                    <div className={'flex-center flex-col space-y-6'}>
                        <div>{dayjs(create_time).format('LLLL')}</div>
                        <div className={'text-3xl font-bold'}>{title}</div>
                        <Divider/>
                        <div ref={pageView} className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 relative'}>
                            <div className={'col-span-1 md:col-span-2 lg:col-span-3 md'}>
                                <MdEditor
                                    editorId={'pre'}
                                    modelValue={text}
                                    onChange={setText}
                                    previewOnly={true}
                                    showCodeRowNumber={true}
                                    previewTheme={preview_theme}
                                    codeTheme={code_theme}
                                    style={{
                                        borderRadius:8
                                    }}
                                />
                            </div>
                            <div className={'hidden md:block col-span-1'}>
                                <div className={`${isFixed?'fixed top-4':'static'}`}>
                                    <DynamicCatalog/>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}


export default Article