import React from 'react'
import FIO from '../FIO/FIO'
import Email from '../Email/email'
import Contact from '../Contacts/Contact'

function Person() {
    return (
        <>
        <div class="personal-info">
            <FIO/>
            <Contact/>
            <Email/>
        </div>
        </>
    )
}

export default Person
