import './navbar.scss';
import variables from '../../scss/Variables.module.scss';
import SvgDatabase from '../../iconComponents/Database';
import { navButtons } from './navButtons';

// all html tags got styles, might mess u up

function Navbar() {
    return(
        <nav className='nav'>
                <label className='logo'><label className='svg'><SvgDatabase/></label><label className='text'>United<label style={{ color: variables.primaryColor }}>DB</label></label></label>
                
                <ul className='buttons'>
                    {navButtons.map((item, index) => { //loops thrugh all items
                        return (
                            <li className='button'>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                    <li className="discordButton">
                        <a href="/">UnitedDB Discord</a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar