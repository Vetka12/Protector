import './styles/card.css';
import React from 'react';
import  '../images/zeus.png';
import logo1 from '../images/zeus.png';


const Card = (props) => {
    return(
        <div className='card-block'>
            <div className='first-block'>
                <div className='logo-name'>
                    <div className='div-img'>
                    <img src={logo1}></img>
                    </div>
                    <br/>
                    {props.card.title}
                </div>
                <div className='description'>
                    <div className='des'>
                        <div className='deses'>
                            <div className='desc-type'>Послуги:</div>
                            <div className='desc-text'>{props.card.tags}</div>
                        </div>
                        <div className='deses'>
                            <div className='desc-type'>Міста:</div>
                            <div className='desc-text'>{props.card.town}</div>
                        </div>
                        <div className='deses'>
                            <div className='desc-type'>Сайт:</div>
                            <div className='com-url'>{props.card.site}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second-block'>
                <div>
                    Про компанію:
                    <div className='main-desc'>
                        {props.card.body}
                    </div>
                </div>
                <div className='base'>
                    Способи зв'язку:
                    <div className='main-base'>
                        {props.card.basesite}
                    </div>
                    <div>
                        {props.card.basephone}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Card;