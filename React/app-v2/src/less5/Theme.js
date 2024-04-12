import React, { PureComponent } from 'react'
import './bold.css'
import Counter2 from './Counter2'
import BoldClass from './BoldClass'


class Theme extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            theme: "light"
        }
    }

    switchTheme () {
        this.setState({
            theme : (this.state.theme === "light") ? "dark": "light"
        })
          
    }

    render() {
        let themeClass = (this.state.theme === "light")? "dark" : "light";
        
        return (
            <div className={themeClass}>
                <button onClick={()=>this.switchTheme()}>SwitchTheme</button>
                <Counter2/>
                <BoldClass/>
            </div>
        )
    }
}

export default Theme