// 第1步：导入React
import * as React from 'react'

// 定义<Greeting>组件
const Greeting = (props) => {
    return (
        <p>哈 {props.name}!</p>
    )
}

// 第3步：导出你的组件
export default Greeting