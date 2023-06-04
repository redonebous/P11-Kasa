import React, { useEffect, useState } from 'react'
import styles from './SlideShow.module.css'

export default function SlideShow({ data, title }) {
    const [index, setIndex] = useState(0)

    useEffect(() => {

        index > (data.length - 1) ? setIndex(0) : setCurrent(data[index])

        index < 0 ? setIndex(data.length - 1) : setCurrent(data[index])

    }, [index, data.length, data])

    const [current, setCurrent] = useState(data[index])

    if (data.length > 1) {
        return (
            <div className={styles.container}>
                <img className={styles.img} src={current} alt={title} />
                <i className={styles.arrowRight + " fa-solid fa-chevron-right"} onClick={() => setIndex(index + 1)}></i>
                <i className={styles.arrowLeft + " fa-solid fa-chevron-left"} onClick={() => setIndex(index - 1)}></i>
                <span className={styles.count}>{index + 1} / {data.length}</span>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <img className={styles.img} src={current} alt={title} />
            </div>
        )
    }

}
