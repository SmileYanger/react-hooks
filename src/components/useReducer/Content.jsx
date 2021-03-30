import React, { useContext } from 'react';
import {ColorContext} from './Color'
export default function Content(){
    const {color} = useContext(ColorContext)
    return (
        <div style={{color}}>
            <h2>我是内容区域</h2>
        </div>
    )
}