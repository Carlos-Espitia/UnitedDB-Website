/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.scss';
import variables from '../../scss/Variables.module.scss';
import SvgDatabase from '../../iconComponents/Database';
import { navButtons } from './navButtons';
import { Link } from 'react-scroll';

// all html tags got styles, might mess u up

function navbtn() {
    var navLinks = document.getElementsByClassName('nav-links')[0]
    navLinks.classList.toggle('active')
}

function Navbar() {
    return(
        <nav className='nav'>
            <div className='brand-title'><label className='svg'><SvgDatabase/></label><label className='text'>United<label style={{ color: variables.primaryColor }}>DB</label></label></div>
            <a href='#' onClick={navbtn} className='nav-btn'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <ul className='nav-links'>
                {navButtons.map((item, index) => { //loops thrugh all items
                    if(item.scrollTo) {
                        return (
                            <li><Link to={item.id} smooth={ true } style={{ cursor: 'pointer' }}>{item.title}</Link></li>
                        )
                    } else {
                        return (
                            <li><a href={item.url} target={item.target}>{item.title}</a></li>
                        )
                    }
                })}
            </ul>
        </nav>
    )
}

export default Navbar