import { createContext, useState, useEffect} from "react";
import axios from 'axios';
import Loader from "../components/Loader/Loader"

export const CuriosityContext = createContext('')

export const CuriosityController = ({children}) => {

    const [curiosity, setCuriosity] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const API_KEY = import.meta.env.VITE_API_KEY
    

    const fetchCuriosity = async (date : string) => {
        
        try{
            const apiCall = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`)
            setCuriosity(apiCall.data)
             
        }
        catch (err :any) {
            setError(err);
            
        }
        finally{
            setIsLoading(false)
        }
    }


    return(
        <CuriosityContext.Provider value={[curiosity, setCuriosity]}>
            {isLoading ? ( <Loader />) : (children)}
        </CuriosityContext.Provider>
    )
}