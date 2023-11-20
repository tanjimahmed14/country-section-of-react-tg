import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";/* import the file */
import './Countries.css'

export default function Countries(){
    const [countries, setCountries] = useState([]);/* useState diye pich the country */
    const [visitedCountrys, setVisited] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])

    useEffect(() => {/* fetch korar jonno dorkar hoy */
        fetch('https://restcountries.com/v3.1/all')
        .then (res => res.json())/* convert to json() */
        .then( data => setCountries(data))/* data useState e set kora hoyche  */
    },[])

    const handelVisited = (country) => {
        console.log('click this function')
        const newArryCountrys = [...visitedCountrys, country];
        setVisited(newArryCountrys);
        // console.log(country.name.common);
    }
    const handelVisitedFlag = (flag) => {
        console.log('adding flag');
        const newFlagArry = [...visitedFlag, flag]
        setVisitedFlag(newFlagArry);
    }


    return (
        <div>
            <h3 className="text-center">Countries : {countries.length}</h3>
            <div>
                <h3>Visited Country : {visitedCountrys.length}</h3>
                <ol>
                {
                    visitedCountrys.map(country => <li key={countries}>{country.name.common}</li>)
                }
                </ol>
            </div>
            {/* img flag */}
            <div className="img-flag">
                {
                    visitedFlag.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-continer">
            {
                countries.map(country => <Country key={country}/* sibgle country */
                handelVisited={handelVisited}
                handelVisitedFlag={handelVisitedFlag}
                     country={country}></Country>)
            }
            </div>
        </div>
    )
}