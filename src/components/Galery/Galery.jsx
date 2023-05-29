import React from 'react'
import styles from './Galery.module.css'
import Card from '../Card/Card'

export default function Galery(props) {

    return (
        <div className={styles.galery}>
            {props.elem.map((elem) => <Card key={elem.id} id={elem.id} img={elem.cover} title={elem.title} />)}
        </div>
    )
}
