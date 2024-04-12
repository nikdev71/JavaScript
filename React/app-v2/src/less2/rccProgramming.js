import React, { PureComponent } from 'react'

class RccProgramming extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <p>Price {this.props.price}</p>
            <p>Title {this.props.title}</p>
            </>
        )
    }
}

export default RccProgramming