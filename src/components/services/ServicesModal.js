import { useState } from 'react';
import './services.css';
const ServicesModal = (props) => {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <>
            <span className='services__button' onClick={() => toggleTab(props.index)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
            <div className={toggleState === `${props.index}` ? "services__modal active-modal" : "services__modal"}>
                <div className='services__modal-content'>
                    <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                    <h3 className='services__modal-title'>{props.serviceTitle}</h3>
                    <p className='services__modal-description'>{props.serviceIntro}</p>
                    <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>{props.service_1}</p>
                        </li>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>{props.service_2}</p>
                        </li>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>{props.service_3}</p>
                        </li>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>{props.service_4}</p>
                        </li>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>{props.service_5}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ServicesModal;