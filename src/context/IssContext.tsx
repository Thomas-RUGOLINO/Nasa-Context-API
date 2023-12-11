// @ts-nocheck
import { createContext, useState, useEffect} from "react";
import axios from 'axios';
import Loader from "../components/Loader/Loader"


export const IssContext = createContext('')

export const IssController = ({children}) => {


    const [latitude, setLatitude] = useState(48.866667)
    const [longitude, setLongitude] = useState(2.333333)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')



    const getLocation = async () => {
        setIsLoading(true)
        try {
                const apiCall = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
                setLatitude(parseFloat(apiCall.data.latitude))
                setLongitude(parseFloat(apiCall.data.longitude))



        }
        catch (err :any) {
            setError(err);
            
        }
        finally{
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getLocation()

        const intervalId = setInterval(() => {
            getLocation();
          }, 5000);
      
          
          return () => clearInterval(intervalId);
    }, []);

    
    console.log('latitude:' + latitude)
        console.log('longitude:' + longitude)
    return (
        <IssContext.Provider value={{value1: {latitude, setLatitude}, value2: {longitude, setLongitude}}} >
             {children}
        </IssContext.Provider>
    )

}