import {Spin} from "antd";


const Loading = () => {
    return (
        <div className={'w-full flex-center'}>
            <Spin size={'large'}/>
        </div>
    );
}


export default Loading