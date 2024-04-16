import React, { PureComponent } from 'react'
import './bold.css'

class BoldClass extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isBold: false,
            italic: false,
            under: false,
            ttt: false,
            fontfamily: 'Arial',
            fontsize: 12,
            color: "black",
            comment: '',
            commentsList: []
        }
    }

    toggle() {
        this.setState({
            isBold: !this.state.isBold
        })
    }
    isItalic() {
        this.setState({
            italic: !this.state.italic
        })
    }
    Underlined() {
        this.setState({
            under: !this.state.under
        })
    }
    Tt() {
        this.setState({
            ttt: !this.state.ttt
        })
    }
    handleChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChanged2 = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }
    message = () =>{
        this.setState({
            commentsList: [
                ...this.state.commentsList,
                { text: this.state.comment, color: this.state.color, fontFamily: this.state.fontfamily }
            ],
            comment: ''
        });
    }
    render() {
        return (
            <div>
                <button onClick={() => this.toggle()}>Bold</button>
                <button onClick={() => this.isItalic()}>Italic</button>
                <button onClick={() => this.Underlined()}>Underlined</button>
                <button onClick={() => this.Tt()}>Tt</button>
                <select name='fontfamily' value={this.state.fontfamily} onChange={this.handleChanged}>
                    <option value="Arial">Arial</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Impact">Impact</option>
                </select>
                <select name='fontsize' value={this.state.fontsize} onChange={this.handleChanged2}>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                </select>
                <input type='color' name='color' value={this.state.color} onChange={this.handleChanged}/>
                <textarea style={{
                    "display": "block",
                    "margin": "20px",
                    "color": this.state.color,
                    "fontSize": this.state.fontsize,
                    "fontFamily": this.state.fontfamily
                }} className={`${this.state.isBold ? "bold" : ""}
                                ${this.state.italic ? "italic" : ""}
                                ${this.state.under ? "under" : ""}
                                ${this.state.ttt ? "Tt" : ""}` }
                    name='comment' 
                    value={this.state.comment} 
                    onChange={this.handleChanged}>Text</textarea>

                <button  onClick={this.message}>Comment</button>

                <ul>
                    {this.state.commentsList.map((comment, index) => (
                        <li key={index} style={{
                             color: comment.color, 
                             fontFamily : comment.fontFamily }}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BoldClass
