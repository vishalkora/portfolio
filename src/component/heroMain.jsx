import { Col, Row } from 'antd'
import React from 'react'

function Main() {
    return (
        <header id="header">
            <div class="container">
                <h1><a href="index.html" className='text-decoration-none'>Vishal Kora</a></h1>
                <h2 className='text-justify'>I'm a passionate <br /><span className='text-decoration-none'>Frontend Developer </span> from India</h2>
                <div class="social-links">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
        </header>
    )
}

export default Main