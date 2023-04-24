import React, {MouseEvent} from 'react';
import MdEditor from 'md-editor-rt';
import type {TocItem} from 'md-editor-rt/lib/MdEditor/extensions/MdCatalog';
import {Card} from "antd";

const onClick = (e: MouseEvent, t: TocItem) => {
    history.replaceState({}, '', `${location.pathname}#${t.text}`);
};

const Catalog = () => {
    return (
        <Card title={'目录'}>
            <MdEditor.MdCatalog
                editorId={'pre'}
                scrollElementOffsetTop={10}
                scrollElement={document.documentElement}
                onClick={onClick}
            />
        </Card>
    );
};

export default Catalog;