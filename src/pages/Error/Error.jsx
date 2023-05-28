import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error.module.css'

export default function Error() {
    return (
        <div className={styles.container}>
            <span className={styles.error}>404</span>
            <span className={styles.text}>Oups! La page que vous demandez n'existe pas.</span>
            <Link className={styles.link} to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
