// @ts-nocheck
import { useContext } from 'react'
import './Apod.scss'
import { ApodContext } from '../../context/ApodContext'

const Apod = () => {
    const [dayPicture, setDayPicture] = useContext(ApodContext)
    return (
        <>
        <div className="apod">
            <h1 className="apod__title"> L'ASTRONOMY PICTURE  OF THE DAY</h1>
            <div className='apod-container'>
                <img className='apod-container__img' src={dayPicture.url}  alt="Pic of the day" />
                <h2 className='apod-container__title'>{dayPicture.title}</h2>
                <p className='apod-container__author'> Auteur : {dayPicture.copyright}, image prise le : {dayPicture.date}</p>
                <p className='apod-container__explanation'>Légende : {dayPicture.explanation}</p>
            </div>
        </div>
        </>
)}

export default Apod