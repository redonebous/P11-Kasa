import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
    const path = '/kasa/' + props.id;

    return (
        <>
            <Link to={path} className={styles.card}>
                <p className={styles.text}>{props.title}</p>
            </Link>
        </>

    )
}
