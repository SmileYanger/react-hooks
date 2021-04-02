import React, { useState, useEffect, useMemo } from 'react'
const nameList = ['apple','peer','banana','Lemo'];
export default  function UseMemoDemo1 (){

    //产品名称、价格
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('apple');
    //获取产品的名字
    function getProductName(){
        console.log('getProductName')
        return name
    }
    //只对name响应
    useEffect(() => {
        console.log('name effect触发')
        getProductName()
    }, [name])

    //只对price响应
    useEffect(() => {
        console.log(' price effect 触发')
    }, [price])

    //memo 的name属性
    const memo_name = useMemo(() => {
        console.log('name memo 触发')
        return () => name  //返回一个函数
    }, [name])
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>普通的name: {getProductName()}</p>
            <p>memo化的L{memo_name()}</p>
            <button onClick={() => {setPrice(price+5)}}>价钱+5</button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
        </div>
    )
}

/** 
 * 点击加价打印
 *      getProductName
 *      price effect 触发
 * 原因：
 *    1. 首先DOM改变，触发在p标签中的getProductName函数
 *    2. 然后调用effect
 * 
 * 点击修改名字：
 *      name memo 触发
 *      getProductName
 *      name effect触发
 *      getProductName
 * 
 * 原因：
 *      1. 首先DOM变化，触发name的memo，
 *      2. 然后触发p标签内的getProductName函数
 *      3. DOM操作结束后触发name的effect
 *      4. 在name的effect中触发getProductName
 * 总结： memo是在DOM更新前触发的。就像官方所说的，类比生命周期就是shouldComponentUpdate
*/