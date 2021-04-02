import React, { useState, memo } from 'react'
const MemoChild = memo(Child) // 使用一层memo来包裹子组件
export default function Parent(){
    const [count, setCount] = useState(1); 

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => {setCount(count+5)}}>+5</button>
            <MemoChild/>
        </div>
    )
}
export function Child(){
    console.log('子组件更新')
    return (
        <div>child组件</div>
    )
}
/** 
 * 点击父组件的button时，就会在子组件打印
 * 解决方案： 使用memo对子组件进行包裹
*/