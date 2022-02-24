import React from 'react'
import './Footer.css';

function Footer() {

    const redirectGit = () => {
        window.open("https://github.com/Poopies99/Spectacle")
    }

    return (
        <div>
            <div className='Footer'>
                <img src='/spectacle.png' alt='' />
                <u className='Footer__link' onClick={redirectGit}>Github Repository</u>
            </div>
        </div>
    )
}

export default Footer