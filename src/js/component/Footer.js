import React from 'react';

const Footer = (props) => {
    return (
        <div className='bg-dark footer-bg '>
            <h1 className='p-4'>{props.title}</h1>
        </div>
    );
}

export default Footer;
