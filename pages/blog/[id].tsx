import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {get_article} from "@/service/service";
import Loading from "@/components/loading";
import {Card} from "antd";
import Catalog from "@/components/catalog";
import TimeClassify from "@/components/time-classify";

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
                    <div className={'grid grid-cols-4 gap-3'}>
                        <Card className={'col-span-3'}>
                            <div className={'flex-center flex-col space-y-3'}>
                                <div className={'text-4xl font-bold'}>{title}</div>
                                <TimeClassify create_time={create_time} classify_value={classify_value} view_count={view_count}/>
                            </div>
                            <div >
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
                        <div className={'col-span-1 space-y-3'}>
                            <div ref={pageView} className={`${isFixed?'fixed top-1':'static'}`}>
                                <Catalog/>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}


export default Article