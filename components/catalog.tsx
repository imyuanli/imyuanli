import React, {useEffect, useState} from 'react';
import MdEditor from 'md-editor-rt';
import {Card} from "antd";

const Catalog = () => {
    const [_document, setDocument] = useState<any>()

    useEffect(() => {
        setDocument(document.documentElement)
    }, [])

    return (
        <Card title={'目录'}
              bodyStyle={{
                  height: 400,
                  overflow: 'auto'
              }}
        >
            {
                _document &&
              <MdEditor.MdCatalog
                editorId={'pre'}
                scrollElement={_document}
              />
            }
        </Card>
    );
};

export default Catalog;