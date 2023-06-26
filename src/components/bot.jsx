import './styles/bot.css';
import React, { useEffect, useState } from "react";
import Larrtwo from '../images/arrows-left.png';
import Rarrtwo from '../images/arrows-right.png';
import Larrone from '../images/arrow-left.png';
import Rarrone from '../images/arrow-right.png';

const Pagination = ({ arrayCards, setCards }) => {
    const toRenderCards = (number) => {
        const filteredCards = arrayCards.filter((obj) => obj.id >= number * 8 - 7 && obj.id <= number * 8)
        setCards(filteredCards)
        console.log(filteredCards)
    }

    return (
        <div className='bottom'>
            <div onClick={() => toRenderCards(1)}>1</div>
            <div onClick={() => toRenderCards(2)}>2</div>
            <div onClick={() => toRenderCards(3)}>3</div>
            <div onClick={() => toRenderCards(4)}>4</div>
            <div onClick={() => toRenderCards(5)}>5</div>
            <div onClick={() => toRenderCards(6)}>6</div>
            <div onClick={() => toRenderCards(7)}>7</div>
            <div onClick={() => toRenderCards(8)}>8</div>
            <div onClick={() => toRenderCards(9)}>9</div>
            <div onClick={() => toRenderCards(10)}>10</div>
            <div onClick={() => toRenderCards(11)}>11</div>
        </div>
    )
}
export default Pagination;