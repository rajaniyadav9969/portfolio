import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import img from '../../assets/images.jpg'
import TextWithCursor from '../TextWithCursor'
import './TextParallaxContent.scss'
export const TextParallaxContentExample = () => {
    return (
        <div className='ParallaxContentExampleSection'>
            <TextParallaxContent
                imgUrl={img}
                subheading="content noun [U] (SUBJECT)"
                heading="the subject or ideas contained in something written, said, created, or represented">
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={img}
                subheading="Acerola cherries"
                heading="Native to countries in the western hemisphere such as Barbados and the West Indies">
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={img}
                subheading="Kiwiberry"
                heading="This relative of the furry-fleshed kiwi is much smaller but just as nutritious.">
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={img}
                subheading="Black elderberry"
                heading="This is what your cold-busting elderberry syrup is made from">
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={img}
                subheading="Apricot"
                heading="You may be more familiar with the dried version of this tangy stone fruit, but if you see the fresh kind at your supermarket ">
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={img}
                subheading="Watermelon"
                heading="Watermelon is 92% water, making it a great choice for hydration. Your food provides about 20% of your fluid intake">
                <ExampleContent />
            </TextParallaxContent>
        </div>
    )
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return <div
        style={{
            paddingLeft: IMG_PADDING,
            paddingRight: IMG_PADDING
        }}>
        <div className='textParallaxContentSection'>
            <StickyImage imgUrl={imgUrl} />
            <OverlayCopy

                heading={heading}
                subheading={subheading} />
        </div>
        {children}
    </div>
}

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    })
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: 'center',
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className='imgSetion'>
            <motion.div
                style={{ opacity, position: 'absolute', inset: '0', background: '#000' }}
            />
        </motion.div>
    )
}

const OverlayCopy = ({ heading, subheading }) => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end ", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [250, -250])
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

    return <motion.div
        ref={targetRef}
        style={{ y, opacity }}
        className='overlayContent'>
        <TextWithCursor  >
            <p className=''>{subheading}</p>
        </TextWithCursor>
        <TextWithCursor  >
            <p className=' '>{heading}</p>
        </TextWithCursor>

    </motion.div>
}

const ExampleContent = () => {
    return <div className='row container py-5 mx-auto' >
        <div className="col-md-3 " style={{ paddingRight: '3rem' }}>
            <h2>Additional content explaining the about card here</h2>
        </div>
        <div className="col-md-9">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad inventore ipsum, debitis corporis nisi sint tenetur? Eveniet sequi nobis officiis ut, vero rem autem optio quidem fuga et aliquid?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad inventore ipsum, debitis corporis nisi sint tenetur? Eveniet sequi nobis officiis ut, vero rem autem optio quidem fuga et aliquid?</p>
            <button>Learn more</button>
        </div>
    </div>
}