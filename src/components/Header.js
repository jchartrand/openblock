import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <h1><strong>OpenBlock</strong><br />Block chain
                    for academia.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
