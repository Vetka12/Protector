import React from 'react';
import './styles/top.css'

const MyButton = ({children, ...props}) => {
    return (
        <button className='entbtn' {...props}>
            {children}
        </button>
    );
};

export default MyButton;