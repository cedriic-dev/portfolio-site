import React, { useEffect, useState } from 'react';
import './Home.css';

interface TypewriterProps {
    text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
    const [content, setContent] = useState('');
    const [cursor, setCursor] = useState(false);
    let index = 0;

    useEffect(() => {
        const timeoutId = setInterval(() => {
            if (index < text.length) {
                index++;
                setContent(text.slice(0, index));
            }
        }, 150);

        const cursorId = setInterval(() => {
            setCursor((value) => !value);
        }, 500);

        return () => {
            clearInterval(timeoutId);
            clearInterval(cursorId);
        };
    }, [text]);

    return (
        <span>
      {content}
            <span className="cursor">{cursor ? '|' : '\u00a0'}</span>
    </span>
    );
};

const Home: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="page-content">
            <div className="home-container">
                <h1 className={`name ${scrollPosition > 0 ? 'fade-out' : ''}`}>
                    <span className="firstName">cedric</span>
                    <span className="lastName">.bauer</span>
                </h1>
                <h2 className={`title ${scrollPosition > 0 ? 'fade-out' : ''}`}>
                    <Typewriter text="Fullstack Developer" />
                </h2>
            </div>
            {scrollPosition === 0 && (
                <div className="scroll-down-section">
                    <h2 className="scroll-down-title">Mein Lebenslauf</h2>
                    <p className="scroll-down-instruction">&lt;ScrollDown&gt;</p>
                </div>
            )}
        </div>
    );
};

export default Home;
