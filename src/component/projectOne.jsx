import React from 'react';
import ProjectOneImg from "../assets/images/projectOne.gif";
import { Button } from 'antd';

function ProjectOne() {
    return (
        <div className='mainSection'>
            <section id="about" class="about">
                <div class="about-me container">
                    <div class="section-title">
                        <h2>Developed By Me</h2>
                        <p>Introducing TourWizAI Lite</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 profileImg" data-aos="fade-right">
                            <img
                                src={ProjectOneImg}
                                class="img-fluid" alt="ProjectOneImg"
                            />
                            <Button
                                size={"large"}
                                shape="default"
                                className="mt-5 px-3 border-0 text-center"
                                style={{ fontSize: "14px", fontWeight: "700", borderRadius: "4px" }}
                                type='primary'
                                target="_blank"
                                href="https://www.tourwizonline.com/tourwizAI"
                            >
                                Preview
                            </Button>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                            {/* <h3 className='title'>Frontend Developer</h3> */}
                            <p class="fst-italic">
                                Introducing TourWizAI Lite, a super-fast tool that helps you build travel itineraries with the power of artificial intelligence (AI). It uses advanced technology to create personalized itineraries based on your inputs or questions.
                            </p>
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i>Imagine you want to plan a trip, but you're not sure where to go or what to do. TourWizAI Lite is here to assist you. You can tell it your preferences, like if you prefer beaches or mountains, how long you'll be traveling, and any specific interests you have. Based on this information, TourWizAI Lite will generate a customized itinerary just for you.</li>
                                        <li><i class="bi bi-chevron-right"></i>The best part is that TourWizAI Lite works incredibly quickly. It doesn't take a long time to process your inputs and provide you with suggestions. Gone are the days of spending hours researching and browsing different websites for travel ideas. With TourWizAI Lite, you can get instant results.</li>
                                        <li><i class="bi bi-chevron-right"></i>Once you receive your itinerary, it will include recommendations for attractions, activities, restaurants, and even transportation options that match your interests. The AI algorithms used by TourWizAI Lite are continuously learning and improving, so the suggestions it provides will get better over time.</li>
                                        <li><i class="bi bi-chevron-right"></i>In simple terms, TourWizAI Lite is like having a smart travel assistant that understands your preferences and creates personalized travel plans just for you. It's a fast and efficient way to plan your next adventure without the hassle of extensive research. Give TourWizAI Lite a try and experience the convenience of AI-powered travel planning!</li>
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

export default ProjectOne;