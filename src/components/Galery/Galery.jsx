import React from 'react'
import styles from './Galery.module.css'
import Card from '../Card/Card'

export default function Galery(props) {
    let list = props.elem.map((elem) => <Card key={elem.id} id={elem.id} title={elem.title} />)

    return (
        <div className={styles.galery}>
            {list}
        </div>
    )
}
