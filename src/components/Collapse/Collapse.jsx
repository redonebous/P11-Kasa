import React, { useState } from 'react'
import styles from './Collapse.module.css'

export default function Collapse(props) {

    const [isToggled, setIsToggled] = useState(false)

    return (
        <div className={styles.container + ' ' + props.largeur}>
            <span className={styles.head}>{props.title}<i style={isToggled ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className='fa-solid fa-chevron-down' onClick={() => setIsToggled(!isToggled)} ></i></span>
            <div style={isToggled ? { maxHeight: "500px" } : { maxHeight: "0px" }} className={styles.content}>
                <div style={isToggled ? { visibility: "visible" } : { visibility: "hidden" }} className={styles.text}>
                    {Array.isArray(props.content) ? props.content.map((elem) => <span key={'equipement_' + props.content.indexOf(elem)} >{elem}</span>) : <p>{props.content}</p>}
                </div>
            </div>
        </div >
    )
}
