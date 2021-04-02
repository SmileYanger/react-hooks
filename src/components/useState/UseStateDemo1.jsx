import React, { useState } from 'react'
const nameList = ['apple','peer','banana','Lemo'];
export default  function UseStateDemo1 (){

    //产品名称、价格
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('apple');
    
    //获取产品的名字
    function getProductName(){
        console.log('getProductName')
        return name
    }
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
 * 目的： 只有修改名字的时候才会触发 getProductName这个方法
 * 
 * 问题：点击加价和修改名字都会触发getProductName这个方法
*/