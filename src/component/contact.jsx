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

                    <div class="row mt-2">

                        <div class="col-md-6 d-flex align-items-stretch">
                            <div class="info-box">
                                <i class="bx bx-map"></i>
                                <i class="bi bi-geo-alt"></i>
                                <h3>My Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                            <div class="info-box">
                                <i class="bi bi-share"></i>
                                <h3>Social Profiles</h3>
                                <div class="social-links">
                                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mt-4 d-flex align-items-stretch">
                            <div class="info-box">
                                <i class="bi bi-envelope"></i>
                                <h3>Email Me</h3>
                                <p>contact@example.com</p>
                            </div>
                        </div>
                        <div class="col-md-6 mt-4 d-flex align-items-stretch">
                            <div class="info-box">
                                <i class="bi bi-telephone"></i>
                                <h3>Call Me</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Contact