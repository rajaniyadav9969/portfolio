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
        default: { x: position.x, y: position.y },
        text: {
            x: position.x, y: position.y,
            height: 150,
            width: 150,
            backgroundColor: "#fff",
            mixBlendMode: "difference"
        }
    }), [position])

    return (
        <>
            {/* <div style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}></div> */}
            <motion.div
                className="ball"
                variants={variants}
                animate={animate}
            ></motion.div>
        </>
    );
};

export default Ball;
