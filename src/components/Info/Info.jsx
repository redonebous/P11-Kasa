import React from 'react'
import styles from './Info.module.css'
import Tag from '../Tag/Tag'
import Collapse from '../Collapse/Collapse'

export default function Info({ data }) {

    const { title, location, host, tags, rating } = data

    let active = []
    let disable = []

    for (let i = 0; i < Number(rating); i++) {
        active[i] = i
    }

    if (active.length < 5) {
        for (let i = 0; i < (5 - active.length); i++) {
            disable[i] = i
        }
    }



    return (
        <div className={styles.info}>
            <div className={styles.logement}>
                <span className={styles.title}>{title}</span>
                <span className={styles.location}>{location}</span>

                <div className={styles.tags}>
                    {tags.map((tag) => <Tag key={'tag_' + tags.indexOf(tag)} name={tag} />)}
                </div>
            </div>

            <div className={styles.userRate}>
                <div className={styles.user}>
                    <span className={styles.name}>{host.name}</span>
                    <img className={styles.img} src={host.picture} alt={host.name} />
                </div>

                <div className={styles.rating}>
                    {active.map((icon) => <i key={'star_' + icon} className={'fa-solid fa-star ' + styles.starActive}></i>)}
                    {disable.map((icon) => <i key={'star_disable_' + icon} className={'fa-solid fa-star ' + styles.starDisable}></i>)}
                </div>
            </div>
        </div>
    )
}
