import React, { createContext, useContext } from 'react';
const appContext = createContext();
function UserName(){
    const {userName} = useContext(appContext);
    return <div>
        <h2>当前用户是：{userName}</h2>
    </div>
}

function PhoneNUmber(){
    const {phone} = useContext(appContext)
    return <div>
        <h2>手机号码：{phone}</h2>
    </div>
}
export default function useContextDemo2(){
    return(
        <appContext.Provider value={{
            userName:'Iric',
            phone:'17795157536'
        }}>
            <UserName></UserName>
            <PhoneNUmber></PhoneNUmber>
        </appContext.Provider>
    )
}