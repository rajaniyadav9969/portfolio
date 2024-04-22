import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    useTransform,
    useSpring,
    motion,
    useScroll  // Import useViewportScroll
} from "framer-motion";

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const [pageHeight, setPageHeight] = useState(0);

    const resizePageHeight = useCallback(entries => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(entries => resizePageHeight(entries));
        scrollRef.current && resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    // Use useViewportScroll to get scrollY as an AnimatedValue
    const { scrollY } = useScroll();

    // Define the transform to create the smooth scroll effect
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);

    const physics = { damping: 50, mass: 1, stiffness: 70 };
    const spring = useSpring(transform, physics);

    return (
        <>
            <motion.div ref={scrollRef} style={{ y: spring }} className="scroll-container">
                {children}
            </motion.div>
            <div style={{ height: pageHeight }} />
        </>
    );
}

export default SmoothScroll;
