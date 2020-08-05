import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar'
import Slide from '../../components/Main/Header/Slide';




export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Header />
            <Slide />
            <Navbar />
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
