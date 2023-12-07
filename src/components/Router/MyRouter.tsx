import {Routes, Route} from 'react-router-dom'
import './MyRouter.scss'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Curiosity from '../Curiosity/Curiosity'
import Curiositys from '../Curiosity/Curiositys'
import Error from '../Error/Error'

const MyRouter = () => {

    return(
        <>
        <NavBar />
        <Routes>
            <Route path='*' element={<Error/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/curiositys' element={<Curiositys/>} />
            <Route path='/curiosity/:id' element={<Curiosity/>} />
        </Routes>
        </>
    )
}

export default MyRouter