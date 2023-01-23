import { useState } from 'react';
import './services.css';
import ServicesModal from './ServicesModal';
const Services = () => {
    const title = ["Product Design", "Front-end Development", "Back-end Development"]
    const intro = [
        "Quality Service with more than 3 years of product design experience.",
        "3-years front-end experience brings a high performance web application.",
        "High-performance API design and standardized server-side architecture bring good product performance"
    ]
    const serviceOne = ["Developing the user interface.", "Developing the web page.", "Developing the web server."]
    const serviceTwo = ["Implementing SEO best practices.", "Optimizing the web styling.", "Improving the server stability."]
    const serviceThree = ["Creating UX element interactions.", "Quickly build website using WordPress.", "Developing standard API."]
    const serviceFour = ["Analysing website performance.", "PC and mobile app development.", "Optimzing server performance."]
    const serviceFive = ["Designing products for companies.", "Engineering build front-end code.", "Managing database properly."]
    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What i offers</span>
            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className='services__title'>Product <br /> Design</h3>
                    </div>
                    <ServicesModal index="1" serviceTitle={title[0]} serviceIntro={intro[0]} service_1={serviceOne[0]} service_2={serviceTwo[0]} service_3={serviceThree[0]} service_4={serviceFour[0]} service_5={serviceFive[0]} />
                </div>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>Front-end<br /> Development</h3>
                    </div>
                    <ServicesModal index="2" serviceTitle={title[1]} serviceIntro={intro[1]} service_1={serviceOne[1]} service_2={serviceTwo[1]} service_3={serviceThree[1]} service_4={serviceFour[1]} service_5={serviceFive[1]} />
                </div>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>Back-end <br /> Development</h3>
                    </div>
                    <ServicesModal index="3" serviceTitle={title[2]} serviceIntro={intro[2]} service_1={serviceOne[2]} service_2={serviceTwo[2]} service_3={serviceThree[2]} service_4={serviceFour[2]} service_5={serviceFive[2]} />
                </div>
            </div>
        </section>
    )
}

export default Services;