import './NavBar.scss'
import {Link} from 'react-router-dom'

const NavBar = () => {
        return (
                <>
                <div className='navigation'>
                        <ul className='navigation__list'>
                                <li className='navigation__item'>
                                        <Link className='navigation__ancre'  to='/' >
                                                <img className='navigation__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="logo de la Nasa" />
                                        </Link>
                                </li>
                                <li className='navigation__item'>
                                        <Link className='navigation__ancre'to='/apod'>Apod</Link>
                                </li>
                                <li className='navigation__item'>
                                        <Link className='navigation__ancre' to='/iss'>Iss tracker</Link>
                                </li>
                                <li className='navigation__item'>
                                         <Link className='navigation__ancre' to='/curiositys'> Curiosity</Link>
                                </li>      
                        </ul>
                </div>
                </>
        )
}

export default NavBar
