import React from 'react';
import ProjectTwoImg from "../assets/images/projectTwo.gif";

function ProjectTwo() {
    return (
        <div className='mainSection'>
            <section id="about" class="about">
                <div class="about-me container">
                    <div class="section-title">
                        <h2>Developed By Me</h2>
                        <p>Introducing Travel Website</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 profileImg" data-aos="fade-right">
                            <img
                                src={ProjectTwoImg}
                                class="img-fluid" alt="ProjectOneImg"
                            />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                            {/* <h3 className='title'>Frontend Developer</h3> */}
                            <p class="fst-italic">
                                Introducing TourWizAI Lite, a super-fast tool that helps you build travel itineraries with the power of artificial intelligence (AI). It uses advanced technology to create personalized itineraries based on your inputs or questions.
                            </p>
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i>User Login: Customers can create an account and log in securely to access their personalized information.</li>
                                        <li><i class="bi bi-chevron-right"></i>Deals and Fixed Packages: Customers can find and choose from a variety of travel deals and pre-designed packages that your travel agency offers.</li>
                                        <li><i class="bi bi-chevron-right"></i>Proposals and Itineraries: You can create customized travel proposals and itineraries for your customers. They can view these documents online and provide feedback or make changes.</li>
                                        <li><i class="bi bi-chevron-right"></i>Bookings: Customers can directly book their travel arrangements through the TourWiz website. It's a convenient way for them to select and confirm their desired options.</li>
                                        <li><i class="bi bi-chevron-right"></i>Payments: TourWiz allows customers to make secure online payments for their travel expenses. They can easily settle their bills through the website.</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                In simple terms, TourWiz Travel Website provides an online platform for customers to log in, access travel deals and packages, view and modify travel proposals and itineraries, make bookings, and make payments securely. It makes the travel planning and management process easier and more convenient for both B2C and corporate customers.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProjectTwo;