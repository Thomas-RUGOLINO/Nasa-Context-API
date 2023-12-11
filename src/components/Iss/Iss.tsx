import './Iss.scss'
import GoogleMapReact from 'google-map-react'
import iss from './iss.png'
import { useContext, useState, useEffect } from 'react'
import { IssContext } from '../../context/IssContext'



const Iss = () => {

    const {value1, value2} =useContext(IssContext)
     // Extraire les valeurs de latitude et longitude ainsi que les fonctions de mise à jour
     const latitude = value1.latitude;
     const setLatitude = value1.setLatitude;
     const longitude = value2.longitude;
     const setLongitude = value2.setLongitude;
 
     // Utiliser ces valeurs pour l'état initial dans useState
     const [lat, setLat] = useState(latitude);
     const [lng, setLng] = useState(longitude);

    const zoom = 2;

    useEffect(() => {
        setLat(latitude);
        setLng(longitude);
      }, [latitude, longitude]);
    
    const defaultCenter = {
        lat:  lat,
        lng:  lng,
    };
    
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
  
    return (
        <>
        <div className='iss'>
            <h2 className="iss__title">Position courante de l'ISS</h2>
            <p className='iss__desc'>La Station spatiale internationale et le laboratoire Columbus de l'ESA volent à une altitude de 400 km à des vitesses qui défient littéralement la gravité. À 28 800 km/h, il ne faut que 92 minutes au laboratoire en apesanteur pour faire un tour complet de la Terre. Les astronautes travaillant et vivant sur la Station connaissent 16 levers et couchers de soleil chaque jour.

            </p>
            <div className='iss__container'>
                <GoogleMapReact
                    bootstrapURLKeys={{key: `${API_KEY}`, }}
                    defaultCenter={defaultCenter}
                    defaultZoom={zoom}
                > 
                    <img  src ={iss} alt="ISS icon" className="iss-icon" lat={defaultCenter.lat} lng={defaultCenter.lng}/>
                    </GoogleMapReact>
            </div>
        </div>
        </>
    )
       
}




export default Iss