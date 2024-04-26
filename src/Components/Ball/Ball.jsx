import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from 'react';



const Ball = ({ animate }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition = e => setPosition({ x: e.clientX - 22, y: e.clientY - 30, })
    useEffect(() => {
        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    const variants = useMemo(() => ({
        default: { x: position.x+8, y: position.y-6, scale:1 },
        text: {
            x: position.x, y: position.y-12,
            scale: 5,
            backgroundColor: "#fff",
            mixBlendMode: "difference",
        }
    }), [position])
    const ballStyle = {
        transition: 'transform 0.1s ease, scale 8s ease',// Adding a CSS transition
        tranrsform: `translate(${position.x}px, ${position.y}px)` // Dynamic position
    };
    return (
        <>
            {/* <div style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}></div> */}
            <motion.div
                className="ball"
                style={{...ballStyle, ...variants[animate]}}
                variants={variants}
                // animate={animate}
            ></motion.div>
        </>
    );
};

export default Ball;
