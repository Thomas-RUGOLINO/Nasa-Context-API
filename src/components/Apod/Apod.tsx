import { useContext } from 'react'
import './Apod.scss'
import { ApodContext } from '../../context/ApodContext'

const Apod = () => {
    const [dayPicture, setDayPicture] = useContext(ApodContext)
    return (
        <>
        <h1> L'ASTRONOMY PICTURE  OF THE DAY</h1>
        <div className='apod'>
            <img className='apod__img' src={dayPicture.url}  alt="Pic of the day" />
            <h2 className='apod__title'>{dayPicture.title}</h2>
            <p className='apod__author'> Auteur : {dayPicture.copyright}, image prise le : {dayPicture.date}</p>
            <p className='apod__explanation'>Légende : {dayPicture.explanation}</p>

        </div>
        </>
)}

export default Apod