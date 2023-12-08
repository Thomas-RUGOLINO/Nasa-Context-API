import './Curiosity.scss'
import { useContext, useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { CuriosityContext } from '../../context/CuriosityContext'

const Curiosity = () => {
    const {value1, value2} = useContext(CuriosityContext)
    const [curiosity, setCuriosity] = value1
    const [date, setDate] = value2
    const [photoData, setPhotoData]= useState();
    const {id}= useParams();
    console.log(id);
    console.log(curiosity.photos)

    const dateObj = new Date(curiosity.photos[0].earth_date);
        const jour = ('0' + dateObj.getDate()).slice(-2);
        const mois = ('0' + (dateObj.getMonth()+1)).slice(-2);
        const annee = dateObj.getFullYear();
        const dateFormat = `${jour}/${mois}/${annee}`;

    const findPhoto = async () => {
        const picData = await curiosity.photos.find((photo :any) => photo.id === parseInt(id));
        console.log(picData);
        setPhotoData(picData);

    }

    useEffect(() =>{
        findPhoto()
        
    }, []);
    console.log(photoData);
    return (
        <>
            <div className="detail--curiosity">
            {photoData? (<h2 className="detail--curiosity__title">Prise de vue de {photoData.camera.name} le jour solaire n° : {photoData.sol}</h2> ): (<Loader />) }
            {photoData? (<p className="detail--curiosity__detail">Module : {photoData.camera.full_name}</p> ): (<Loader />) }
            {photoData? (<p className="detail--curiosity__date">Photo prise le : {dateFormat}</p> ): (<Loader />) }
            {photoData? (<img className="detail--curiosity__image" src={photoData.img_src} alt={`Photo numero ${photoData.id}`} /> ): (<Loader />) }
            </div>
        </>    
)}

export default Curiosity