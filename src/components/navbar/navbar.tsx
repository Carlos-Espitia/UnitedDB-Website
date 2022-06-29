import './navbar.scss';
import variables from '../../scss/Variables.module.scss';
import SvgDatabase from '../../iconComponents/Database';
import { navButtons } from './navButtons';

// all html tags got styles, might mess u up

function Navbar() {
    return(
        <nav className='nav'>
            <div className='brand-title'><label className='svg'><SvgDatabase/></label><label className='text'>United<label style={{ color: variables.primaryColor }}>DB</label></label></div>
            <a href='#' className='nav-btn'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <ul className='nav-links'>
                {navButtons.map((item, index) => { //loops thrugh all items
                    return (
                        <li><a href={item.url}>{item.title}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}

// const toggleBtn = document.getElementsByClassName('nav-btn')[0]
// const navLinks = document.getElementsByClassName('nav-links')[0]

// toggleBtn.addEventListener('click', () => {
//     navLinks.classList.toggle('active')
// })

export default Navbar