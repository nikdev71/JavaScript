/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import BookList from '../Book/BookList';
import BookList2 from '../Book/BookList2';
import React, { PureComponent } from 'react'

class Display extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLog: true,
        };
    }
    
    handle = () => {
        this.setState(prevState => ({
            isLog: !prevState.isLog
        }));
    }

    render() {
        const { isLog } = this.state;
        let content;
        if (isLog) {
            content = <BookList />;
        } else {
            content = <BookList2 />;
        }
        return (
            <div>
                <div>
                    {content}
                </div>
                <div>
                    {isLog ? <BookList /> : <BookList2/>}
                </div>
                <div>
                    {isLog && <BookList />}
                 </div>
                <button onClick={this.handle}>Поменять</button>
            </div>
        );
    }
}

export default Display
