import React, { PureComponent } from 'react'
import Title from '../Title/title'
import Pages from '../Pages/pages'
import Author from '../Author/author'

class Book extends PureComponent {
    

    render() {
        return (
            <>
            <div class="book-info">
            <Title/>
            <Author/>
            <Pages/>
            </div>
            </>
        )
    }
}

export default Book