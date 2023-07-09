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
                            <div class="row mt-4">
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>11 May 1998</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Ahmedabad, Gujarat</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-9510175147</span></li>

                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Msc(CA&IT)</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>vishalkora3665@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                I am a React.js developer with 1.6 years of experience, and I consider myself a fast learner. I have a strong background in designing and problem-solving, and I have worked as an experienced frontend developer at ClTech Solution, primarily focusing on the TourWiz product.
                            </p>
                            <p>
                                I hold an MSc in Computer Science with a specialization in CA & IT from K. S. School of Business Management & Information Technology at Gujarat University Campus. I completed my degree from July 2020 to June 2022. Prior to that, I earned a BSc in Computer Science with a specialization in CA & IT from the same institution, from July 2017 to June 2020.
                            </p>
                            <p>
                                In terms of certifications, I completed the Tech Kaushalya program at the Department of Computer Science Rollwala Computer Centre, Gujarat University, in February 2020. I also obtained a certification in Programming in C from Mudra Computer Education in September 2016.
                            </p>
                            <p>
                                My skillset includes proficiency in HTML5, CSS3, and JavaScript, with a strong understanding of web development principles and best practices. I am knowledgeable about popular UI frameworks/libraries such as Ant Design (Antd), Bootstrap, and React.js, enabling me to create aesthetically pleasing and responsive user interfaces. I am experienced in utilizing React components, lifecycle methods, and state management with React Hooks and Redux. Additionally, I have worked with JSON for data interchange between the client and server, and I am familiar with cross-browser compatibility, accessibility standards, and web performance optimization techniques. Version control systems like GitHub and GitLab are also part of my repertoire
                            </p>
                            <p>
                                During my tenure at ClTech Solution, I have contributed to the development and implementation of several important features in the Tourwiz product. Notable examples include the Package Module, Itinerary Builder, TourwizAI, CRM, and Reporting. I have also integrated external services and APIs, such as the ChatGPT API, to enhance the TourwizAI module and automate the creation of itineraries and packages. In my work, I have emphasized the creation of reusable components and optimized them for improved performance and maintainability. Collaboration with the backend development team has been crucial to ensuring seamless communication between the front-end and server-side components.
                            </p>
                            <p>
                                Throughout the development cycle, I have actively participated in discussions with product managers, designers, and quality assurance professionals to gather requirements and provide technical insights. I have also engaged in code reviews and offered constructive feedback to uphold quality standards and adhere to best practices.
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