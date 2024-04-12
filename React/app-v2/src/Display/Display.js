/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import BookList from '../Book/BookList';
import BookList2 from '../Book/BookList2';
import React, { PureComponent } from 'react'

class Display extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLog: true
        };
    }
    
    handle = () => {
        this.setState(prevState => ({
            isLog: !prevState.isLog
        }));
    }

    render() {
        const { isLog } = this.state;
        return (
            <div>
                <div>
                    {isLog ? <BookList /> : <BookList2/>}
                </div>
                <button onClick={this.handle}>Поменять</button>
            </div>
        );
    }
}

export default Display
