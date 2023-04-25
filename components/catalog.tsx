import React, {MouseEvent, useState} from 'react';
import MdEditor from 'md-editor-rt';
import type {TocItem} from 'md-editor-rt/lib/MdEditor/extensions/MdCatalog';
import {Card} from "antd";

const onClick = (e: MouseEvent, t: TocItem) => {
    history.replaceState({}, '', `${location.pathname}#${t.text}`);
};
const Catalog = () => {
    const [_document, setDocument] = useState<any>(null)
    React.useEffect(() => {
        setDocument(document)
    }, [])
    return (
        <Card title={'目录'}
        bodyStyle={{width:240,height:400,overflow:'auto'}}
        >
            <MdEditor.MdCatalog
                editorId={'pre'}
                scrollElementOffsetTop={10}
                scrollElement={_document && _document.documentElement}
                onClick={onClick}
            />
        </Card>
    );
};

export default Catalog;