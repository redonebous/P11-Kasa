import React from 'react'
import styles from './Banner.module.css'


export default function Banner(props) {

    return (
        <div className={styles.container + ' ' + props.hauteur}>
            <p className={styles.text}>{props.text}</p>
            <img className={styles.banner} src={props.img} alt="falaise" />
        </div>
    )
}
