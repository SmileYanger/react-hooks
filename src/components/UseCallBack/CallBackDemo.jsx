import React, { useState, memo, useCallback } from 'react'

const Memochild = memo(Child);
export default function Parent(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Testchild组件')
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count+1)}>++</button>
            <Memochild name={name} setName={useCallback(
                (newName) => {
                    setName(newName)
                },
                [],
            )}></Memochild>
            {/* <Memochild name={name} setName={newName => setName(newName)}></Memochild> */}
        </div>
    )
}
export function Child(props){
    console.log('我是子组件，我更新了')
    return(
        <div>
            <h3>子组件：{props.name}</h3>
            <button onClick={() => props.setName(props.name +'改变后的name')}>改变组件name</button>
        </div>
    )
}
/**
 * 问题： 当点击父组件的+1和子组件的修改名字都会触发子组件更新
 * 解决： 使用useCallback 使得只有点击修改名字才会更新子组件
 */