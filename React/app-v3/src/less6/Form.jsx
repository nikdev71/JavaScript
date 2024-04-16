import React, { PureComponent } from 'react'

class Form extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            email: '',
            lang_ua: false,
            lang_en: false,
            city: '',
            errorName: '',
            errorEmail: ''
        }
    }

    handleChange = (event)=> this.setState({[event.target.name]: event.target.value})

    handleCheckChange = (e)=> this.setState({[e.target.name]: e.target.checked})

    validateName = () => {
        if(this.state.userName.length <5){
            this.setState({errorName : 'Username length less then 5'})
        }
        else{
            this.setState({errorName : ''})
        }
    }

    validateEmail = () => {
        let reg =/^((?!\.)[\w-_.]*[^.](@\w+)(\.\w+)?[^.\W])$/gim
        if(!reg.test(this.state.email)){
            this.setState({errorEmail : 'Email not correct'})
        }
        else{
            this.setState({errorEmail : ''})
        }
    }

    render() {
        return (
            <>
            <h1>Form</h1>
            <form action="">
            <input type="text"
                   placeholder="Name"
                   name="userName"
                   value={this.state.userName}
                   onChange={this.handleChange}
                   onInput={this.validateName}
                   />
                   <p style={{color: "red"}}>{this.state.errorName}</p>
            <input type="email"
            placeholder="example@gmail.com"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            onInput={this.validateEmail}
            />
            <p style={{color: "red"}}>{this.state.errorEmail}</p>
            <input type="checkbox"
                    id="lang_ua"
                    name="lang_ua"
                    checked={this.state.lang_ua}
                    onChange={this.handleCheckChange} />
            <label htmlFor="lang_ua">UA</label>
            <input type="checkbox"
                    id="lang_en"
                    name="lang_en"
                    checked={this.state.lang_en}
                    onChange={this.handleCheckChange} 
                    />
            <label htmlFor="lang_en">EN</label>
            <select name="city" id="city" value={this.state.city} onChange={this.handleChange}>
                <option value="Odesa">Odesa</option>
                <option value="Lviv">Lviv</option>
                <option value="Kiyv">Kiyv</option>
            </select>
            <textarea name="txtarea" id="" cols="30" rows="3" placeholder='Text'/>
            </form>
            </>
        )
    }
}

export default Form