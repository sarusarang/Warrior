import React from 'react'
import { useEffect } from 'react';
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {

        AOS.init();

    }, []);

    return (




        <section>



            <div className="container-fluid p-5 d-flex justify-content-center  about py-5">


                <div className="about-left col-md-4 rounded-4 col-12" data-aos="zoom-in">

                    <h3 className=" px-4 py-3 fw-semi-bold">About Warrior</h3>
                    <p className="px-4">
                        With 15 years of experience, Warrior Inverter excels in manufacturing and installing high-quality inverters, batteries, solar systems, and water purifiers. Our dedication to innovation and excellence ensures top-tier products that meet the diverse needs of residential, commercial, and industrial clients. <br /> <br />
                        Our energy solutions are designed for efficiency and durability, promoting sustainability and reducing energy costs. Additionally, our advanced water purifiers provide clean, safe drinking water, enhancing overall quality of life. <br /> <br />
                        We prioritize customer satisfaction through comprehensive support and maintenance services. Warrior Inverter is committed to leading in green technology, driving environmental stewardship and energy independence.
                    </p>

                    <a href="" className="view-more">
                        View More
                    </a>

                </div>


                <div className="about-right col-md-8 col-12 ms-3" data-aos="zoom-in">

                    <video src="https://cms.microtek.in/upload/cmspage/about-video-1717712396302.mp4" preload='auto'  autoPlay loop muted playsInline />

                </div>


            </div>


        </section>






    )





}

export default About