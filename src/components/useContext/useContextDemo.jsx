import React, { useState, createContext, useContext } from 'react'
const CountContext = createContext();
function ChildComp(){
    let count = useContext(CountContext)
    return <h2>我是子组件，我当前的值是：{count}</h2>
}
export default function useContextDemo() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>you clicked <b>{count}</b> times</p>
            <button onClick={() => { setCount(count + 1) }}>
                click me
            </button>
            <CountContext.Provider value={count}>
                <ChildComp></ChildComp>
            </CountContext.Provider>
        </div>
    )
}