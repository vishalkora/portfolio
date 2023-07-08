import { Col, Row } from 'antd'
import React from 'react'

function Main() {
    return (
        <header id="header" style={{ height: "100vh" }}>
            <div class="container">
                <h1><a href="index.html" className='text-decoration-none'>Vishal Kora</a></h1>
                <h2 className='text-justify'>I'm a passionate <br /><span className='text-decoration-none'>React JS Developer </span> from India</h2>
                <div class="social-links">
                    <a href="https://github.com/vishalkora" target='_blank' class="github"><i class="bi bi-github"></i></a>
                    <a href="https://medium.com/@Vishalkora" target='_blank' class="medium"><i class="bi bi-medium"></i></a>
                    <a href="https://stackoverflow.com/users/18223400/vishal-kora" target='_blank' class="stackOverflow"><i class="bi bi-stack-overflow"></i></a>
                    <a href="https://www.linkedin.com/in/vishalkora" target='_blank' class="linkedin"><i class="bi bi-linkedin"></i></a>
                    <a href="https://web.whatsapp.com/send?phone=919510175147&text=hello!" target='_blank' class="whatsapp"><i class="bi bi-whatsapp"></i></a>
                </div>
            </div>
        </header>
    )
}

export default Main