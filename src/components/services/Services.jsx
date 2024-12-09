import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product <br /> Designer </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>View More<i
                        className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-model" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">I design innovative solutions for users, focusing on addressing real pain points and creating engaging, efficient experiences.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I create user-friendly interfaces.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Wireframe and prototype development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I craft seamless UX interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I strengthen your company’s brand identity.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Research and design of impactful products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="services__content">
                    <div>
                        <i className="uil uil-laptop services__icon"></i> {/* Updated Icon for Web Development */}
                        <h3 className="services__title">Web <br /> Designer </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-model" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Web Designer</h3>
                            <p className="services__modal-description">I design visually appealing and functional websites that are responsive, user-friendly, and aligned with your brand’s goals.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I develop responsive web pages.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I create engaging user interfaces.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I ensure smooth user interactions and navigation.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I align web design with your brand identity.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Design and mockups of websites for businesses.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>





                <div className="services__content">
                    <div>
                        <i className="uil uil-chart-bar services__icon"></i>
                        <h3 className="services__title">Data <br /> Visualization </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-model" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Data Visualization</h3>
                            <p className="services__modal-description">I transform complex data into interactive and visually appealing charts and dashboards to drive better business insights.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I create interactive and responsive data dashboards.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I design data visualizations using Power BI, Tableau, and other tools.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I analyze and present key business metrics in easy-to-understand visuals.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I integrate data from multiple sources for comprehensive insights.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I provide actionable insights through visual storytelling with data.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Services