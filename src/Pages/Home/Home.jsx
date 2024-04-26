import React from 'react'
import GlobeAnimaton from './GlobalAnimation/GlobalAnimation'
import style from './Home.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import TextWithCursor from '../../Components/TextWithCursor'
import homecontent from '../../JSON/content.json'
import imgkehf from '../../assets/pushme.svg'

const Home = () => {
    const { home } = homecontent;
    console.log(home)

    
    return (
        <div className={style.homeSection}>
            <div className={style.homeTopSection}>
                <GlobeAnimaton />
                <motion.div className={style.globalContent}>
                    <TextWithCursor  >
                        <h6>{home.des}</h6>
                        <p className={style.repetitive}>{home.title}</p>
                    </TextWithCursor>
                </motion.div>
            </div>
            <div className={style.descriptionSection}>
                <div className={style.description}>
                    <div>
                        <p>{home.description}</p>
                    </div>
                </div>
                <div className={style.exploremore}>
                    <img
                        src={`/src/assets/${home["pushimg"]}`}
                        alt="push me"
                    />
                    <p className={style.pushme}>PUSH <br /> ME</p>
                </div>
            </div>
            <div>
                <marquee behavior="alternate" scrollamount={40} style={{ fontSize: '13rem' }}>{home.name}    </marquee>
            </div>

        </div>
    )
}

export default Home