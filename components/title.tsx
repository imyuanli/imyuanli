import {Divider} from "antd";

export default function Title({text}:any) {
    return (
        <>
            <div className={'text-3xl font-bold text-gray-800'}>
                {text}
            </div>
            <Divider style={{
                width: 50,
                minWidth: 50,
                height: 3,
                backgroundColor: '#70C000'
            }}/>
        </>
    );
}
