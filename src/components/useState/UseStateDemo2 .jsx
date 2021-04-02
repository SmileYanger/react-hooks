import React, { useState, useEffect } from 'react'
const nameList = ['apple','peer','banana','Lemo'];
export default  function UseStateDemo2 (){

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
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{getProductName()}</p>
            <button onClick={() => {setPrice(price+5)}}>价钱+5</button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
        </div>
    )
}
/** 
 * 点击加价打印：
 *  //getProductName
 *  //price effect 触发
 * 
 * 原因是使用setPrice的时候，产生DOM操作，从而触发了在P标签中的getProductName函数
 * 然后调用副作用触发了price的effect
 * 
 * 
 * 点击 修改名字打印：
 *  getProductName
 *  name effect触发
 *  getProductName
 * 
 * 原因是因为修改了DOM，触发了getProductName函数
 * 随后调用了name的effect
 * effect中调用了getProductName函数
 * 
 * 
 * 目的： 在DOM发生变化时，不相关的函数不需要触发，而effect只能在DOM更新后在触发，所以没有解决问题
 * 
*/