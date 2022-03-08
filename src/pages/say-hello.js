// 第1步：导入React
import * as React from 'react'
import Greeting from '../components/greeting'

// 渲染<Greeting>组件
const SayHello = () => {
    return (
        <div>
            <Greeting name="Megan" />
            <Greeting name="Obinna" />
            <Greeting name="Generosa" />
        </div>
    )
}

// 第3步：导出你的组件
export default SayHello