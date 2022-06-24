import './hero.scss'
import variables from '../../scss/Variables.module.scss';
import SvgMods from '../../iconComponents/Mods';
import SvgDatabase2 from '../../iconComponents/Database2';


function hero() {
    return(
        <div className='hero'>
            <div className='text'>
                <h1>Don't deal with hackers </h1>
                <h2>Protect your MCBE server with United<label style={{ color: variables.primaryColor }}>DB</label></h2>
                <h3>We are a team that archive data on MCBE hackers in order to keep your server a non toxic and enjoyable environment.</h3>
                <div className='btns'>
                    <li className='downloadBtn'>
                        <a href="/">Download</a>
                    </li>
                    <li className='docBtn'>
                        <a href="/">Documentation</a>
                    </li>
                </div>
            </div>
            <div className='svg'><SvgMods/></div>
            <div className='modText'>Moderator count</div>
            <div className='modCount'>10</div>

            <label className='svg2'><SvgDatabase2/></label>
            <div className='bpText'>Banned player count</div>
            <div className='bpCount'>100</div>
        </div>
    )
}

export default hero