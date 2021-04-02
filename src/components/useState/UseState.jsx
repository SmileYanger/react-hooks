import React, { useState } from 'react'
export default function UseStateDemo() {
    //此处的count setCount只是一个名称，可以随意起名字
    // 10是一个初始值变量 也可以根据情况设置初始值

    const [count, setCount] = useState(0);
    
    /**
     * []的作用是用于数组结构
     * 上面的写法等价于下面
     *  const _useState = useState(0);
        const count = _useState[0];
        const setCount = _useState[1];
        通过usestate的顺序进行记录的
     */ 

    const [age, setAge] =useState(23);

    const [todos, setTodos] = useState({text:'to learn Hooks'});
    function changeTodos(){
        setTodos({text: 'to learn React'})
    }
    return (
        <div>
            <h2>我是UseStateDemo</h2>

            <p>我的初始值是：{count} <button onClick={() =>{setCount(count+1)}}>+1</button></p>
            

            <p>当前年龄是： {age} <button onClick={() => {setAge(age+1)}}>+</button><button onClick={() => {setAge(age-1)}}>-</button></p>
            

            <p>{todos.text} <button onClick={changeTodos}>修改todos</button></p>
            
            <hr/>
        </div>
    )
}