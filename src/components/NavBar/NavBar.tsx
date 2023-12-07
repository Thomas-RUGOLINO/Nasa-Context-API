import './NavBar.scss'
import {Link} from 'react-router-dom'

const NavBar = () => {
        return (
                <div className="navigation">
                    <Link to='/'>Accueil</Link>
                    <Link to='/curiositys'> Curiosity</Link>
                </div>


        )


}

export default NavBar
