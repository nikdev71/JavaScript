import React, { PureComponent } from 'react'
import '../App.css'

class City extends PureComponent {
    

    render() {
        return (
            <>
             <div class="location">
                <h1>Odessa</h1>
                <p>Ukraine</p>
                <p>1794</p>
                <img src="https://whc.unesco.org/uploads/thumbs/site_1703_0003-750-750-20230206105558.jpg" alt=""/>
            </div>
    
            </>
        )
    }
}

export default City