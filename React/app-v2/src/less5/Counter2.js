import React, { PureComponent } from 'react'
import './bold.css'


class Counter2 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handle(num) {
        this.setState({
            count: this.state.count +num
        })
    }

    render() {
        return (
            <div >
                <p style={{fontSize: '20px', margin: "20px"}}>{this.state.count}</p>
                <button onClick={()=>this.handle(-10)}>-10</button>
                <button onClick={()=>this.handle(-1)}>-1</button>
                <button onClick={()=>this.handle(1)}>+1</button>
                <button onClick={()=>this.handle(10)}>+10</button>
            </div>
        )
    }
}

export default Counter2