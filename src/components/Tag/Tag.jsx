import React from 'react'
import styles from './Tag.module.css'

export default function Tag({ name }) {
    return (
        <span className={styles.tag}>
            {name}
        </span>
    )
}
