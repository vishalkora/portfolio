import React from 'react'

function Contact() {
    return (
        <div className='mainSection'>
            <section id="contact" class="contact">
                <div class="container">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Contact Me</p>
                    </div>

                    <div class="row mt-5 mb-5">

                        <div class="col-md-6 d-flex align-items-stretch">
                            <div class="info-box">
                                <i class="bx bx-map"></i>
                                <i class="bi bi-geo-alt"></i>
                                <h3>My Address</h3>
                                <p>Bapunagar, Ahmedabad, GJ India</p>
                            </div>
                        </div>

                        <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                            <div class="info-box">
                                <i class="bi bi-share"></i>
                                <h3>Social Profiles</h3>
                                <div class="social-links">
                                    <a href="https://github.com/vishalkora" target='_blank' class="github"><i class="bi bi-github"></i></a>
                                    <a href="https://www.linkedin.com/in/vishalkora" target='_blank' class="linkedin"><i class="bi bi-linkedin"></i></a>
                                    <a href="https://web.whatsapp.com/send?phone=919510175147&text=hello!" target='_blank' class="whatsapp"><i class="bi bi-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mt-4 d-flex align-items-stretch">
                            <div class="info-box">
                                <i class="bi bi-envelope"></i>
                                <h3>Email Me</h3>
                                <p><a href="mailto: vishalkora3665@gmail.com" className='text-decoration-none' style={{ color: "#213363" }}>vishalkora3665@gmail.com</a></p>
                            </div>
                        </div>
                        <div class="col-md-6 mt-4 d-flex align-items-stretch">
                            <div class="info-box">
                                <i class="bi bi-telephone"></i>
                                <h3>Call Me</h3>
                                <p><a href="tel:6031112298" className='text-decoration-none' style={{ color: "#213363" }}>+91 9510175147</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Contact