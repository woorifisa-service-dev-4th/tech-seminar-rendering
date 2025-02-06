import React, {useState} from "react";

// 자식 컴포넌트
const ChildComponent = React.memo(({count}) => {
    console.log("자식컴포넌트 렌더링됨!");
    return <div>Count: {count}</div>;
});

// react.memo 미적용
// const ChildComponent =({count}) => {
//     console.log("자식컴포넌트 렌더링됨!");
//     return <div>Count: {count}</div>;
// };

// 부모 컴포넌트
const ParentComponent = () => {

    const [count, setCount] = useState(0);
    const [State, setState] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col mt-4 text-center">
                <ChildComponent count={count}/>
                <button className="border-2 p-2" onClick={() => setCount(count + 1)}>카운트 증가</button>
                <button className="border-2 p-2 mt-2" onClick={() => setState(!State)}>상태 변경</button>
            </div>
        </div>
    );
};

export default ParentComponent;


