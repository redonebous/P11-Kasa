import React, { useEffect, useState } from 'react'
import data from '../../data/data.json'
import { useNavigate, useParams } from 'react-router-dom'
import SlideShow from '../../components/SlideShow/SlideShow'
import Info from '../../components/Info/Info'
import Collapse from '../../components/Collapse/Collapse'
import styles from './Logement.module.css'

export default function Logement() {
    const params = useParams()

    const [logement, setLogement] = useState(data.filter((elem) => elem.id === params.id)[0])

    const navigate = useNavigate()

    useEffect(() => {

        logement || navigate("/notFound")

    }, [logement, navigate])

    if (logement) {
        return (
            <>
                <SlideShow data={logement.pictures} title={logement.title} />
                <Info data={logement} />
                <div className={styles.collapses}>
                    <Collapse largeur={styles.large} hauteur={styles.hauteur} title={'Description'} content={logement.description} />
                    <Collapse largeur={styles.large} hauteur={styles.hauteur} title={'Equipements'} content={logement.equipments} />
                </div>
            </>
        )

    } else {
        return <div></div>
    }

}
