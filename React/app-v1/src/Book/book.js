import React, { PureComponent } from 'react'
import Title from '../Title/title'
import Pages from '../Pages/pages'
import Author from '../Author/author'

class Book extends PureComponent {
    

    render() {
        return (
            <>
            <Title/>
            <Author/>
            <Pages/>
            </>
        )
    }
}

export default Book