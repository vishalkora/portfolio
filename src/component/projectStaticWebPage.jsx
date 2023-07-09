import React from 'react';
import img1 from "../assets/images/staticWPDesktop.png";
import { Button } from 'antd';

function ProjectStaticWebPage() {
    return (
        <div className='mainSection'>
            <section id="about" class="about">
                <div class="about-me container">
                    <div class="section-title">
                        <h2>Developed By Me</h2>
                        <p>Static Web Page</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 " data-aos="fade-right">
                            <img
                                src={img1}
                                class="img-fluid" alt="img1"
                                style={{ width: "440px" }}
                            />
                            <div className='row'>
                                <div class="col-lg-12" data-aos="fade-right">
                                    <Button
                                        size={"large"}
                                        shape="default"
                                        className="mt-5 px-3 border-0 text-center"
                                        style={{ fontSize: "14px", fontWeight: "700", borderRadius: "4px" }}
                                        type='primary'
                                        target="_blank"
                                        href="https://www.appolosesame.com/"
                                    >
                                        Preview
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3 className='title'>Introduction</h3>
                            <p class="fst-italic">
                                Hello everyone, today I would like to share with you my experience of developing a website for Appolo Sesame Industries. This project holds a special significance for me as it marked my first foray into web development using HTML, CSS, and JavaScript. Throughout this endeavor, I gained valuable knowledge and hands-on experience that enriched my learning journey.
                            </p>
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul>
                                        <li>
                                            <i class="bi bi-chevron-right"></i>
                                            <strong style={{ color: "#ef5366" }}>Company:</strong> Appolo Sesame Industries
                                        </li>
                                        <li>
                                            <i class="bi bi-chevron-right"></i>
                                            <strong style={{ color: "#ef5366" }}>Objective:</strong>Develop a professional website to showcase the company's products and services.
                                        </li>
                                        <li>
                                            <i class="bi bi-chevron-right"></i>
                                            <strong style={{ color: "#ef5366" }}>Technologies Used:</strong>HTML, CSS, JavaScript
                                        </li>
                                        <li>
                                            <i class="bi bi-chevron-right"></i>
                                            <strong style={{ color: "#ef5366" }}>Personal Development Goal:</strong> Learn and apply web development concepts in a practical project.
                                        </li>
                                    </ul>
                                    <h3 className='title'>Planning and Preparation:</h3>
                                    <p>Before diving into the development process, thorough planning was essential:</p>
                                    <ul>
                                        <li> <i class="bi bi-chevron-right"></i> Defined the purpose, structure, and content of the website.</li>
                                        <li> <i class="bi bi-chevron-right"></i> Considered layout, navigation, and interactive elements.</li>
                                        <li> <i class="bi bi-chevron-right"></i> Outlined the target audience and their needs to ensure an optimal user experience.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectStaticWebPage;