import React from 'react';
import github from "../assets/images/github.svg";
import gitlab from "../assets/images/gitlab.svg";
import react from "../assets/images/react.svg";
import redux from "../assets/images/redux.svg";
import jenkins from "../assets/images/jenkins.svg";
import babel from "../assets/images/babel.svg";
import Bootstrap from "../assets/images/bootstrap.svg";
import api from "../assets/images/api.svg";
import sql from "../assets/images/sql.svg";
import postman from "../assets/images/postman.svg";
import wordpress from "../assets/images/wordpress.svg";
import php from "../assets/images/php.svg";

function TechnicalSkills() {
    return (
        <div className='mainSection'>
            <section id="about" class="about">
                <div class="about-me container">
                    <div class="section-title">
                        <h2>Technical Skills</h2>
                        <p>Learn more about my skills</p>
                    </div>
                </div>

                <div class="skills container">
                    <div class="row skills-content">
                        <div class="col-lg-12">
                            <div class="container">
                                <div class="skills-flex-container">
                                    <div class="box">
                                        <div class="image">
                                            <img src={react} alt="react" />
                                        </div>
                                        <div class="title">React JS</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={redux} alt="redux" />
                                        </div>
                                        <div class="title">Redux</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={api} alt="api" />
                                        </div>
                                        <div class="title">API</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={babel} alt="babel" />
                                        </div>
                                        <div class="title">Babel</div>
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
                                            <img src={Bootstrap} alt="Bootstrap" />
                                        </div>
                                        <div class="title">Bootstrap</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={github} alt="github" />
                                        </div>
                                        <div class="title">GitHub</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={gitlab} alt="gitlab" />
                                        </div>
                                        <div class="title">GitLab</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={jenkins} alt="jenkins" />
                                        </div>
                                        <div class="title">Jenkins</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={sql} alt="babel" />
                                        </div>
                                        <div class="title">SQL</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={postman} alt="postman" />
                                        </div>
                                        <div class="title">Postman</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={wordpress} alt="wordpress" />
                                        </div>
                                        <div class="title">Wordpress</div>
                                    </div>
                                    <div class="box">
                                        <div class="image">
                                            <img src={php} alt="php" />
                                        </div>
                                        <div class="title">PHP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default TechnicalSkills