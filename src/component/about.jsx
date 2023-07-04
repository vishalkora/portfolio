import React from 'react';
import Vishal from "../assets/images/profile.jpg";

function About() {
    return (
        <div className='mainSection'>
            <section id="about" class="about">
                <div class="about-me container">
                    <div class="section-title">
                        <h2>About</h2>
                        <p>Learn more about me</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 profileImg" data-aos="fade-right">
                            <img
                                src={Vishal}
                                class="img-fluid" alt="Vishal"
                            />
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3 className='title'>Frontend Developer</h3>
                            <p class="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>

                </div>
                {/* <div class="counts container">

                    <div class="row">

                        <div class="col-lg-3 col-md-6">
                            <div class="count-box">
                                <i class="bi bi-emoji-smile"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div class="count-box">
                                <i class="bi bi-journal-richtext"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                                <p>Projects</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div class="count-box">
                                <i class="bi bi-headset"></i>
                                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
                                <p>Hours Of Support</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div class="count-box">
                                <i class="bi bi-award"></i>
                                <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" class="purecounter"></span>
                                <p>Awards</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="skills container">

                    <div class="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div class="row skills-content">
                        <div class="col-lg-6">
                            <div class="container">
                                <div class="skills-flex-container">
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/xd.png" alt="xd" />
                                        </div>
                                        <div class="title">Adobe Xd</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/figma.png" alt="figma" />
                                        </div>
                                        <div class="title">Figma</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/html.png" alt="html" />
                                        </div>
                                        <div class="title">HTML</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/css.png" alt="css" />
                                        </div>
                                        <div class="title">CSS</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/js.png" alt="javascript" />
                                        </div>
                                        <div class="title">JavaScript</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/photoshop.png" alt="photoshop" />
                                        </div>
                                        <div class="title">Photoshop</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/illustrator.png" alt="illustrator" />
                                        </div>
                                        <div class="title">Illustrator</div>
                                    </div>

                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/pr.png" alt="premiere pro" />
                                        </div>
                                        <div class="title">Premiere Pro</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/ae.png" alt="after effects" />
                                        </div>
                                        <div class="title">After Effects</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/blender.png" alt="blender" />
                                        </div>
                                        <div class="title">Blender</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="container">
                                <div class="skills-flex-container">
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/xd.png" alt="xd" />
                                        </div>
                                        <div class="title">Adobe Xd</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/figma.png" alt="figma" />
                                        </div>
                                        <div class="title">Figma</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/html.png" alt="html" />
                                        </div>
                                        <div class="title">HTML</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/css.png" alt="css" />
                                        </div>
                                        <div class="title">CSS</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/js.png" alt="javascript" />
                                        </div>
                                        <div class="title">JavaScript</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/photoshop.png" alt="photoshop" />
                                        </div>
                                        <div class="title">Photoshop</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/illustrator.png" alt="illustrator" />
                                        </div>
                                        <div class="title">Illustrator</div>
                                    </div>

                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/pr.png" alt="premiere pro" />
                                        </div>
                                        <div class="title">Premiere Pro</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/ae.png" alt="after effects" />
                                        </div>
                                        <div class="title">After Effects</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/blender.png" alt="blender" />
                                        </div>
                                        <div class="title">Blender</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="interests container">

                    <div class="section-title">
                        <h2>Interests</h2>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="icon-box">
                                <i class="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                                <h3>Lorem Ipsum</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div class="icon-box">
                                <i class="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
                                <h3>Dolor Sitema</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div class="icon-box">
                                <i class="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
                                <h3>Sed perspiciatis</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                            <div class="icon-box">
                                <i class="ri-paint-brush-line" style={{ color: "#e361ff" }}></i>
                                <h3>Magni Dolores</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4">
                            <div class="icon-box">
                                <i class="ri-database-2-line" style={{ color: "#47aeff" }}></i>
                                <h3>Nemo Enim</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4">
                            <div class="icon-box">
                                <i class="ri-gradienter-line" style={{ color: "#ffa76e" }}></i>
                                <h3>Eiusmod Tempor</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4">
                            <div class="icon-box">
                                <i class="ri-file-list-3-line" style={{ color: "#11dbcf" }}></i>
                                <h3>Midela Teren</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4">
                            <div class="icon-box">
                                <i class="ri-price-tag-2-line" style={{ color: "#4233ff" }}></i>
                                <h3>Pira Neve</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4">
                            <div class="icon-box">
                                <i class="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                                <h3>Dirada Pack</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4">
                            <div class="icon-box">
                                <i class="ri-disc-line" style={{ color: "#b20969" }}></i>
                                <h3>Moton Ideal</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4">
                            <div class="icon-box">
                                <i class="ri-base-station-line" style={{ color: "#ff5828" }}></i>
                                <h3>Verdo Park</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mt-4">
                            <div class="icon-box">
                                <i class="ri-fingerprint-line" style={{ color: "#29cc61" }}></i>
                                <h3>Flavor Nivelanda</h3>
                            </div>
                        </div>
                    </div>

                </div> */}
            </section>

        </div>
    )
}

export default About