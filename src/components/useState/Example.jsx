import React from 'react'
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    addCount = () => {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h2>我是Example组件</h2>
                <p>我的初始值是：{this.state.count} </p>
                <button onClick = {this.addCount}>+1</button>
                <hr/>
            </div>
        );
    }
}

export default Example;