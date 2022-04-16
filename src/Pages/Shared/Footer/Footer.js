import React from 'react';

const Footer = () => {

    var currentYear = new Date().getFullYear();

    return (
        <footer>
            <p><small> &copy; {currentYear}</small></p>
        </footer>
    );
};

export default Footer;