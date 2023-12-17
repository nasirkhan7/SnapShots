import React from 'react'
import './frontpage.css'
const FrontPage = () => {
return (
<>
    <div className="d-flex p-5 flex-column col-lg-5 mx-auto text-center gap-1">
        <h1>I'm <span className='name'>Nasir Khan</span> a Professional Photographer from Pakistan</h1>
        <p className='fs-4'>
            "As a Pakistani photographer, I freeze moments that whisper the unique tales of my diverse homeland,
            painting a canvas of cultural richness and untold beauty."</p>
        <button className='btn text-uppercase rounded-1 front-button px-4 align-self-center'>
            Available for hire
        </button>
    </div>
</>
)
}

export default FrontPage