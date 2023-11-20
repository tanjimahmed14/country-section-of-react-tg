import { useState } from 'react';
import './Country.css'
export default function Country({country, handelVisited, handelVisitedFlag}){
    console.log(country)
    const {name, flags, population, region , continents} = country;
    const [visited, setVisited] = useState(false)
    const handelClick =() =>{
        // setVisited(true)
        setVisited(!visited)
    }

    return(
        <div className={`country ${visited && 'visited'}`}>
            <h3>{name?.common}</h3>
            <img src={flags?.png} alt="" />   
            <h2>Popolation : {population}</h2>
            <h2>Region : {region}</h2>
            <button onClick={() => handelVisited(country)}>Make Visited</button><br /> <br />
            <button onClick={() => handelVisitedFlag(country.flags.png)}>Add flag</button><br /> <br />
            <button onClick={handelClick}>{visited ? 'Visited': 'No visit'}</button>
            {visited ? '  This contry is visited' : ' i want to visit'}
            <hr />
            <h3>Name : {name?.common}</h3>
            <h3>Continents : {continents}</h3>
        </div>
    )
}