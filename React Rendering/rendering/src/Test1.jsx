
import React, {useCallback, useState} from "react";

//자식 컴포넌트
const ChildComponent = React.memo(({count, handleClick}) => {
    console.log("자식컴포넌트 렌더링됨!");
    return (
        <div>
            <p>Count: {count}</p>
            <button className="border-2" onClick={handleClick}>자식컴포넌트 버튼</button>
        </div>
    );
});

//부모 컴포넌트
const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [State, setState] = useState(false);

    const handleClick = useCallback( () => {
        console.log("자식컴포넌트 버튼 클릭");
    },[]);

    // useCallback 미적용
    // const handleClick =  () => {
    //     console.log("자식컴포넌트 버튼 클릭");
    // };
    //
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col mt-4 text-center">
                <ChildComponent count={count} handleClick={handleClick}/>
                <button className="border-2 p-2 mt-2" onClick={() => setCount(count + 1)}>카운트 증가</button>
                <button className="border-2 p-2 mt-2" onClick={() => setState(!State)}>상태 변경</button>
            </div>
        </div>
    );
};

export default ParentComponent;

