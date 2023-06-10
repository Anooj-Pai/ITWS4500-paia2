import { Link } from 'react-scroll'
import logo from '../assets/Wealthx-logos_white.png'

function Header() {
    return (
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <a href="#"><Link to='intro' smooth='true'><img src={logo} className="imgLogo" alt="Click To Scroll Down" title='Click To Scroll Down' />
                        <div className='scroll'>Click To Scroll Down</div>
                        <div className='scroll arr'>&darr;</div>
                    </Link></a>
                </div>
            </div>
        </nav>
    )
}

export default Header
