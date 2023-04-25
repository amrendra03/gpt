import React from 'react'

import { Footer, Features, WhatGPT3, Header } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />

            <CTA />

            <Footer />
        </div>
    )
}

export default App
