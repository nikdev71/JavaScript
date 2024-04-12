import React, { PureComponent } from 'react'
import './bold.css'


class BoldClass extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isBold: false,
            italic: false,
            under: false
        }
    }

    toggle(){
        this.setState({
            isBold: !this.state.isBold
        })
    }
    isItalic(){
        this.setState({
            italic: !this.state.italic
        })
    }
    Underlined(){
        this.setState({
            under : !this.state.under
        })
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.toggle()}>Bold</button>
                <button onClick={()=>this.isItalic()}>Italic</button>
                <button onClick={()=>this.Underlined()}>Underlined</button>
                <textarea style={{"display":"block", "margin": "20px"}} className={`${this.state.isBold ? "bold" : ""} 
                                ${this.state.italic ? "italic" : ""}
                                ${this.state.under ? "under" : ""}`}>Text</textarea>
            </div>
        )
    }
}

export default BoldClass