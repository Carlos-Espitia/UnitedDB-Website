/* eslint-disable jsx-a11y/anchor-is-valid */
import './docnav.scss';
import variables from '../../scss/Variables.module.scss';
import { docSections, currentDoc } from './docNavSections';

// all html tags got styles, might mess u up

function docNavBtn() {
    var navLinks = document.getElementsByClassName('docnav-links')[0]
    navLinks.classList.toggle('active')
}


function Docnav() {
    return(
        <div className='navpad'>
            <nav className='docnav'>
                <div className='activeDoc'>{currentDoc}</div>
                <a href='#' onClick={docNavBtn} className='docnav-btn'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
                <ul className='docnav-links'>
                    {docSections.map((item, index) => { //loops thrugh all items
                        if(currentDoc === item.title) {
                            return (
                                <li style={{ background: variables.black1 }}><a href={item.url} style={{ color: variables.accent }}>{item.title}</a></li>
                            )
                        } else {
                            return (
                                <li><a href={item.url}>{item.title}</a></li>
                            )
                        }
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Docnav