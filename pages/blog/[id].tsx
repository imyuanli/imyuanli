import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {get_article} from "@/service/service";
import Loading from "@/components/loading";
import {Divider} from "antd";
import dayjs from "dayjs";


const Article = () => {
    const router = useRouter()
    const {id} = router.query

    const [text, setText] = useState('hello md-editor-rt！');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>({});

    const {title, describe, classify_value, preview_theme, code_theme, view_count, create_time} = data
    useEffect(() => {
        setLoading(true)
        get_article({article_id: id}).then((res: any) => {
            if (res) {
                setData({...res.article})
                setText(res.article.content)
                setLoading(false)
            }
        }).catch(() => {
            setLoading(false)
        })
    }, [id])

    return (
        <div>
            {
                loading ?
                    <Loading/>
                    :
                    <div className={'flex-center flex-col space-y-6'}>
                        <div>{dayjs(create_time).format('LLLL')}</div>
                        <div className={'text-3xl font-bold'}>{title}</div>
                        <Divider />
                        <MdEditor
                            modelValue={text}
                            onChange={setText}
                            previewOnly={true}
                            showCodeRowNumber={true}
                            previewTheme={preview_theme}
                            codeTheme={code_theme}
                        />
                    </div>
            }
        </div>
    );
}


export default Article