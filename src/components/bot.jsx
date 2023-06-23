import './styles/bot.css';
import React, { useEffect, useState } from "react";
import Larrtwo from '../images/arrows-left.png';
import Rarrtwo from '../images/arrows-right.png';
import Larrone from '../images/arrow-left.png';
import Rarrone from '../images/arrow-right.png';

const Bot = () => {
    return(
        <div className='bottom'>
            <div>
            <img src={Larrtwo}></img>
            <img src={Larrone}></img>
            </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>
            <img src={Rarrone}></img>
            <img src={Rarrtwo}></img>              
            </div>
        </div>
    )
}
export default Bot;