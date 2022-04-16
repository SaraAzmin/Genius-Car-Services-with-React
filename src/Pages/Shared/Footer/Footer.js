import React from 'react';

const Footer = () => {

    var currentYear = new Date().getFullYear();

    return (
        <footer className='text-center mt-5'>
            <p><small> &copy; {currentYear}</small></p>
        </footer>
    );
};

export default Footer;