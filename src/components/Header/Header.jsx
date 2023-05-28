import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import img from '../../images/logo_kasa.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.img} src={img} alt="Logo" />
            <nav className={styles.navigation}>
                <Link to="/">Acceuil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </div>
    )
}
