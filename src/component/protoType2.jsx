import React from 'react';
import ProjectTwoImg from "../assets/images/projectTwo.gif";
import { Link } from 'react-router-dom';
import { EyeTwoTone } from '@ant-design/icons';

function ProtoType2() {
    return (
        <div className='mainSection' style={{ width: "400px" }}>
            <section id="about" class="about">
                <div class="about-me container">
                    <div class="row">
                        <div class="col-lg-12" data-aos="fade-right">
                            <div class="section-title">
                                <h2 style={{ fontSize: "18px", color: "#a8a8a8" }}><Link to="/project-tourwizWebsite" style={{ color: "#a8a8a8" }} className='text-decoration-none'><EyeTwoTone twoToneColor="#ef5366" style={{ fontSize: "24px" }} />  View Fullsize</Link></h2>
                                <p style={{ fontSize: "18px" }}><Link to="/project-tourwizWebsite" style={{ color: "#ef5366" }} className='text-decoration-none'>Introducing Travel Website</Link></p>
                            </div>
                            <Link to="/project-tourwizWebsite">
                                <img
                                    src={ProjectTwoImg}
                                    class="img-fluid" alt="ProjectOneImg"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProtoType2;