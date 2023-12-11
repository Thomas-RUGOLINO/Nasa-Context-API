// @ts-nocheck
import './Curiositys.scss'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CuriosityContext } from '../../context/CuriosityContext'

const Curiositys = () => {
    const {value1, value2} =useContext(CuriosityContext)
    const [curiosity, setCuriosity] = value1
    const [date, setDate] = value2
    const [inputValue, setInputValue]= useState ('')

    const handleSubmit = ( e : any ) => {
        e.preventDefault()
        setDate(inputValue)
        
    }
    console.log(curiosity);

    const dateObj = new Date(curiosity.photos[0].earth_date);
        const jour = ('0' + dateObj.getDate()).slice(-2);
        const mois = ('0' + (dateObj.getMonth()+1)).slice(-2);
        const annee = dateObj.getFullYear();
        const dateFormat = `${jour}/${mois}/${annee}`;

    return (
        <>
        <div className="curiositys">
            <h2 className="curiositys__title">Les Photos de Curiosity du : {dateFormat} - {curiosity.photos.length} Clichés</h2>
            <form className="curiositys__form" onSubmit={handleSubmit}>
                <input className="curiositys__input" type='text' value={inputValue} placeholder='Entrez une date au format AAAA-MM-JJ à partir de SEPT 2012' onChange={e => setInputValue(e.target.value)} />
                <button className="curiositys__button" type="submit">Envoyer</button>
            </form>
        </div>
        <div className='curiositys__container'>
            {curiosity.photos.map((photo: any) => {
                
                return(
                    <>
                    <Link key={photo.id} className="curiositys__link" to={`/curiosity/${photo.id}`}>
                        <img className="curiositys__img" src={photo.img_src} alt="photo rover" />
                    </Link>
                    </>
                )
            })}
        </div>
        </>
)
}

export default Curiositys