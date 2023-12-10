import './NavBar.scss'
import {Link} from 'react-router-dom'

const NavBar = () => {
        return (
                <>
                <div className="navigation">
                        <Link to='/' className="logo-link" >
                                <img className="logo-link__image" src="https://www.1min30.com/wp-content/uploads/2018/01/Couleur-logo-NASA.jpg" alt="logo de la Nasa" />
                        </Link>
                        <div className="navigation-items">
                                <Link to='/apod' className='navigation-items__link'>Apod</Link>
                                <Link to='/iss' className='navigation-items__link'>Iss tracker</Link>
                                <Link to='/curiositys' className='navigation-items__link'> Curiosity</Link>
                        </div>
                </div>
                </>
        )
}

export default NavBar
