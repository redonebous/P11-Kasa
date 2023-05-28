import React from 'react'
import styles from './Footer.module.css'
import img from '../../images/logo_kasa.png'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src={img} alt="" />
            <p className={styles.text}>© 2020 Kasa. All rights reserved.</p>

        </div>
    )
}
