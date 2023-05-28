import React, { useState, useEffect } from 'react'
import data from '../../data/data.json'
import Banner from '../../components/Banner/Banner'
import Galery from '../../components/Galery/Galery'
import img from '../../images/banner_1.png'

export default function Home() {

    const [logements, setLogements] = useState(data);
    const text = 'Chez vous, partout et ailleurs';

    return (
        <>
            <Banner img={img} text={text} />
            <Galery elem={logements} />
        </>
    )
}
