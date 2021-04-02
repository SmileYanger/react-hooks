import React, { useState, useEffect } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('我是首页-----我来了')
        return () => {
            console.log('我是首页-----我走了')
        }
    },[])
    return <h2>我是首页</h2>;
}

function List() {
    useEffect(() => {
        console.log('我是List页面*******我来了')
        return () => {
            console.log('我是List页面*****我走了')
        }
    })
    return <h2>List-Page</h2>;
}

export default function useEffectDemo2() {
    const [count, setCount] = useState(0);
    useEffect (() => {
        console.log('我是计数器组件')
        return () => {
            console.log('-----------')
        }
    },[count])
    /** 
     * 如果时空数组，则不打印
     * 如果是[count] 则count变化的时候会打印
    */
    return (
        <div>
            <p>you clicked <b>{count}</b> times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
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