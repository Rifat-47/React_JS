import React, { useState, useEffect } from 'react';
import classes from './MovableButton.module.css';

const MovableButton = () => {
    const [position, setPosition] = useState({ x: 0, y: 300});
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;

        const newPosX = event.clientX;
        const newPosY = event.clientY;
        console.log({'newPosX':  newPosX, 'newPosY': newPosY})

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        console.log({'windowWidth':  windowWidth, 'windowHeight': windowHeight})

        const buttonWidth = document.getElementById('movable_button').offsetWidth;
        const buttonHeight = document.getElementById('movable_button').offsetHeight;

        const maxX = windowWidth - buttonWidth;
        const maxY = windowHeight - buttonHeight;

        const clampedX = Math.min(Math.max(newPosX, 0), maxX);
        const clampedY = Math.min(Math.max(newPosY, 0), maxY);

        setPosition({ x: clampedX, y: clampedY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const handleWindowResize = () => {
        const buttonWidth = document.getElementById('movable_button').offsetWidth;
        const buttonHeight = document.getElementById('movable_button').offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const maxX = windowWidth - buttonWidth;
        const maxY = windowHeight - buttonHeight;

        setPosition((prevPosition) => ({
            x: Math.min(prevPosition.x, maxX),
            y: Math.min(prevPosition.y, maxY),
        }));

        console.log('handling window resize');
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            console.log('removing event listener!')
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div
            id="movable_button"
            className={classes.movable_button}
            style={{ top: position.y, left: position.x }}
            onMouseDown={handleMouseDown}
        >
            {console.log({ top: position.y, left: position.x })}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                height="32px"
                width="32px"
                role="img">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="white"
                    d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z">
                </path>
            </svg>
        </div>
    );
};

export default MovableButton;

