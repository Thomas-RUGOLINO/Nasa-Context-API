// @ts-nocheck
import { createContext, useState, useEffect} from "react";
import Loader from "../components/Loader/Loader";
import axios from 'axios'; 


export const ApodContext = createContext('')

export const ApodController = ({children}) => {

    const [dayPicture,setDayPicture] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const API_KEY = import.meta.env.VITE_API_KEY

    const fetchDayPicture = async () => {

        try{
            const apiCall = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            setDayPicture(apiCall.data)
            
        }
        catch (err : any) {
            setError(err);
            console.log(error);
        } 
        finally {
            setIsLoading(false);
            console.log(API_KEY);

        }
    }

    useEffect(() => {
        fetchDayPicture()
        console.log(dayPicture);
    }, [])

    return(
       <ApodContext.Provider value={[dayPicture, setDayPicture]}>
           {isLoading ? ( <Loader />) : (children)} 
        </ApodContext.Provider>
    )
}



