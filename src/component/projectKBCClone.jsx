import React from 'react';
import img1 from "../assets/images/kbcDesktop.png";
import img2 from "../assets/images/KbcWelcome.png";
import img3 from "../assets/images/KbcSignUp.png";
import { Button } from 'antd';

function ProjectKBCClone() {
    return (
        <div className='mainSection'>
            <section id="about" class="about">
                <div class="about-me container">
                    <div class="section-title">
                        <h2>Developed By Me</h2>
                        <p>KBC Clone Game</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 " data-aos="fade-right">
                            <img
                                src={img1}
                                class="img-fluid" alt="img1"
                                style={{ width: "540px" }}
                            />
                            <hr />
                            <div className='row'>
                                <div className='col-lg-12 d-flex justify-content-between'>
                                    <img
                                        src={img2}
                                        class="img-fluid" alt="img1"
                                        style={{ width: "140px" }}
                                    />
                                    <img
                                        src={img3}
                                        class="img-fluid" alt="img1"
                                        style={{ width: "140px" }}
                                    />
                                </div>
                                <div class="col-lg-12" data-aos="fade-right">
                                    <Button
                                        size={"large"}
                                        shape="default"
                                        className="mt-5 px-3 border-0 text-center"
                                        style={{ fontSize: "14px", fontWeight: "700", borderRadius: "4px" }}
                                        type='primary'
                                        target="_blank"
                                        href="https://kbc-clone.web.app/"
                                    >
                                        Preview
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3 className='title'>Game Overview</h3>
                            <p>Welcome to the exciting world of the KBC Clone Game! Get ready to challenge your knowledge and be rewarded for your skills.</p>
                            <p>This webpage has been developed using modern web technologies:</p>
                            <ul>
                                <li> <i class="bi bi-chevron-right"></i> Front-end Framework: React.js</li>
                                <li> <i class="bi bi-chevron-right"></i> Languages: HTML5, CSS3, JavaScript</li>
                                <li> <i class="bi bi-chevron-right"></i> Styling: Bootstrap CSS Framework</li>
                            </ul>
                            <div class="row">
                                <div class="col-lg-12">
                                    <h3 className='title'>Game Flow</h3>
                                    <ul>
                                        <li> <i class="bi bi-chevron-right"></i><strong>Sign Up and Login</strong> Start by signing up and creating an account to access the game. Log in using your credentials to begin the fun!</li>
                                        <li> <i class="bi bi-chevron-right"></i><strong>Quiz Gameplay</strong> Put your knowledge to the test in the quiz section. Answer a series of multiple-choice questions within a limited time frame.</li>
                                        <li> <i class="bi bi-chevron-right"></i><strong>Rewards and Points</strong> Earn points based on your quiz performance. Accumulate points to unlock exciting rewards, badges, or levels.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-title mt-5 text-center">
                        <p>Test Your Knowledge and Win Reward Points!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectKBCClone;