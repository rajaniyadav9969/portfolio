import React from 'react'
import bg from '../../assets/404Error.webp'
import TopScreen from '../TopScreen/TopScreen'
function PageNotFound() {
    return (
        <div>
            <TopScreen videoOrPhoto={bg} // or video URL if using video
                height={650}

            /></div>
    )
}

export default PageNotFound