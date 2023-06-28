import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header className="header">
            <p className="header-name">cedric.bauer</p>
            <nav>
                <ul>
                    <li><a href="/">start()</a></li>
                    <li><a href="/about">info()</a></li>
                    <li><a href="mailto:bauer.cedric@icloud.com">mail()</a></li>
                    <li><a href="https://linkedin.com/in/bauer-cedric"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href="https://github.com/cedriic-dev"> <FontAwesomeIcon icon={faGithub} /> </a></li>
                    {}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
