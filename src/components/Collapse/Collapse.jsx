import React, { useEffect, useRef, useState } from 'react'
import styles from './Collapse.module.css'

export default function Collapse(props) {

    const classTextRef = useRef(`${styles.text} ${styles.hide}`);
    const classIconRef = useRef("fa-solid fa-chevron-down");

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            classTextRef.current = `${styles.text} ${props.hauteur} ${styles.show}`
            classIconRef.current = `fa-solid fa-chevron-down ${styles.up}`
        } else {
            // 1 - 3
            classTextRef.current = `${styles.text} ${props.hauteur} ${styles.hide}`
            classIconRef.current = `fa-solid fa-chevron-down ${styles.down}`
        }
    }, [isOpen])

    const [isToggled, setIsToggled] = useState(false)

    useEffect(() => {
        if (isToggled) {
            classTextRef.current = `${styles.text} ${props.hauteur} ${styles.show} ${styles.activeDrop}`
            classIconRef.current = `fa-solid fa-chevron-down ${styles.up} ${styles.activeIcon}`
            setIsOpen(true)
        } else {
            // 2
            classTextRef.current = `${styles.text} ${props.hauteur} ${styles.hide} ${styles.disableDrop}`
            classIconRef.current = `fa-solid fa-chevron-down ${styles.down} ${styles.disableIcon}`
            setIsOpen(false)
        }

    }, [isToggled])


    return (
        <div className={styles.container + ' ' + props.largeur}>
            <span className={styles.head}>{props.title}<i className={classIconRef.current} onClick={() => setIsToggled(!isToggled)} ></i></span>
            <div className={classTextRef.current}>{Array.isArray(props.content) ? props.content.map((content) => <span>{content}</span>) : <p>{props.content}</p>}</div>
        </div>
    )
}
