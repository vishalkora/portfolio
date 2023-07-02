import React from 'react';
import ProjectThreeImg from "../assets/images/projectThree.gif";

function ProjectThree() {
    return (
        <div className='mainSection'>
            <section id="about" class="about">
                <div class="about-me container">
                    <div class="section-title">
                        <h2>Developed By Me</h2>
                        <p>Introducing Itinerary Builder</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 profileImg" data-aos="fade-right">
                            <img
                                src={ProjectThreeImg}
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
                                        <li><i class="bi bi-chevron-right"></i>Time-saving: Building itineraries/packages using Excel sheets or Word documents can be time-consuming. TourWiz provides an intuitive and user-friendly interface that streamlines the process, allowing you to generate customized itineraries in minutes.</li>
                                        <li><i class="bi bi-chevron-right"></i>Fully Customizable: With TourWiz, you have the flexibility to customize every aspect of your itineraries. You can add photos, include detailed information about each activity or destination, and even personalize the itineraries with your own branding elements such as logos or color schemes.</li>
                                        <li><i class="bi bi-chevron-right"></i>Easy-to-use Interface: The TourWiz Itinerary Builder is designed to be easy to use, even for those without extensive technical knowledge. The interface guides you through the process step-by-step, making it simple to add, edit, or rearrange itinerary components.</li>
                                        <li><i class="bi bi-chevron-right"></i>Branding Options: TourWiz allows you to incorporate your own branding into the itineraries you create. This helps to showcase your travel agency's identity and professionalism, making a strong impression on your clients.</li>
                                        <li><i class="bi bi-chevron-right"></i>Visual Appeal: Adding photos to your itineraries enhances the visual appeal and gives your clients a better sense of what to expect during their trip. TourWiz enables you to easily include captivating images that complement the itinerary details.</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                In summary, the TourWiz Itinerary Builder is a time-saving tool that simplifies the process of creating custom itineraries/packages. Its easy-to-use interface, customization options, branding capabilities, and ability to incorporate photos make it an effective solution for generating professional and visually appealing itineraries in minutes, saving you valuable time and effort.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProjectThree;