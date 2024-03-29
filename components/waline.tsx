import React, {useEffect, useRef} from 'react';
import {init} from '@waline/client';
import '@waline/client/dist/waline.css'
import '@waline/client/dist/waline-meta.css'
import type {WalineInstance, WalineInitOptions} from '@waline/client';

export type WalineOptions = Omit<WalineInitOptions, 'el'> & { path: string };
const Waline = (props: WalineOptions) => {
    const walineInstanceRef = useRef<WalineInstance | null>(null);
    const containerRef = React.createRef<HTMLDivElement>();
    useEffect(() => {
        walineInstanceRef.current = init({
            ...props,
            el: containerRef.current,
            lang: 'zh',
            login: 'disable',
            comment: true,
            emoji: [],
            reaction: true, // 开启反应
        });

        return () => walineInstanceRef.current?.destroy();
    }, []);

    useEffect(() => {
        walineInstanceRef.current?.update(props);
    }, [props]);

    return <div ref={containerRef}/>;
};

export default Waline