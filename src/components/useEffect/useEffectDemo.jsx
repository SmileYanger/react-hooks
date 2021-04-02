import React, { useState, useEffect } from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
/**
 *你可以把useEffect Hook看作
 componentDidMount,
 componentDidUpdate，
 componentWillUnmount
 这三个生命周期的组合
 *
 * @export
 * @return {*} 
 */

function Index() {
    return <h2>JSPang.com</h2>;
}

function List() {
    return <h2>List-Page</h2>;
}

export default function useEffectDemo() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(23)
    useEffect(() => {
        console.log('每次渲染都执行')
    })
    useEffect(() => {
        console.log('我传了一个空数组')
    },[])
    useEffect(() => {
        console.log(`只有count改变的时候才执行`)
    }, [count])
    
    useEffect(() => {
        console.log('只有当age改变时才执行')
    },[age])

    // useEffect(() => {
    //     console.log('我要执行')
    // },[age, count])
    return (
        <div>
            <h2>我是useEffect的demo</h2>
            <p>you clicked <b>{count}</b> times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <hr />
            <p>当前年龄是：{age}</p>
            <button onClick={() => { setAge(age + 1) }}>设置年龄</button>
            <BrowserRouter>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </BrowserRouter>
        </div>
    )
}