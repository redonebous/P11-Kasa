import React, { useState } from 'react'
import data from '../../data/about.json'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import img from '../../images/banner_2.png'
import styles from './About.module.css'


export default function About() {
    const [about, setAbout] = useState(data)

    return (
        <div className={styles.main}>
            <Banner hauteur={styles.hauteur} img={img} />
            {about.map((elem) => <Collapse key={about.indexOf(elem)} title={elem.title} content={elem.content} />)}
        </div>
    )
}
