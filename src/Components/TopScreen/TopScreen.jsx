import React from 'react';
import styles from './TopScreen.module.scss';

const TopScreen = ({ className, videoOrPhoto, bgColor, heading, description, height, children, number }) => {
    const screenStyle = {
        height: height ? `${height}px` : "max-content",
        background: `url(${videoOrPhoto}) no-repeat center center/cover`,
        backgroundColor: bgColor && bgColor
    };

    return (
        <div className={`banner ${styles.topscreen} ${className} `} style={screenStyle}>
            <div className={styles.contentdiv}>
                {heading && <h1 >{heading} {number && <span>{number}</span>}</h1>}
                {description && <p>{description} </p>}
            </div>
            {children}
        </div>
    );
};

export default TopScreen;