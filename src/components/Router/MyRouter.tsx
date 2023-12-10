import {Routes, Route} from 'react-router-dom'
import './MyRouter.scss'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Apod from '../Apod/Apod'
import Iss from '../Iss/Iss'
import Curiosity from '../Curiosity/Curiosity'
import Curiositys from '../Curiosity/Curiositys'
import Error from '../Error/Error'
import { ApodController } from '../../context/ApodContext'
import { CuriosityController } from '../../context/CuriosityContext'
import { IssController } from '../../context/IssContext'

const MyRouter = () => {

    return(
        <>
        <ApodController>
            <IssController>
            <CuriosityController>
            <NavBar />
            <Routes>
                <Route path='*' element={<Error />} />
                <Route path='/' element={<Home />} />
                <Route path='/apod' element={<Apod />} />
                <Route path='/iss' element={<Iss /> } />
                <Route path='/curiositys' element={<Curiositys />} />
                <Route path='/curiosity/:id' element={<Curiosity />} />
            </Routes>
            </CuriosityController>
            </IssController>
        </ApodController>
        </>
    )
}

export default MyRouter