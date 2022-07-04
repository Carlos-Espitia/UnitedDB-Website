import './hero.scss'
import variables from '../../scss/Variables.module.scss';
import SvgMods from '../../iconComponents/Mods';
import SvgDatabase2 from '../../iconComponents/Database2';
import { Link } from 'react-scroll';
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { DB_API } from '../../App';
//
function Hero() {

    const [playerBans, setPlayerBans] = useState<number | string >('Loading...')

    useEffect(() => {
        axios.get(`${DB_API}/BannedPlayers`, {
                headers: {
                    "authorization": "Carlos:sawe1459"
                }
            })
            .then(res => {
                setPlayerBans(res.data.length)
            })
            .catch(res => {
                setPlayerBans('Loading...')
            })
    }, [DB_API])

    return(
        <div className='hero' id='home'>
            <div className='hero2'>
                <div className='hero3'>
                    <h1>Don't deal with hackers </h1>
                    <h2>Protect your MCBE server with United<label style={{ color: variables.primaryColor }}>DB</label></h2>
                    <h3>We are a team that archive data on MCBE hackers in order to keep your server a non toxic and enjoyable environment.</h3>
                    <div className='btns'>
                        <li className='downloadBtn'>
                            {/* <a href="/">Download</a> */}
                            <Link to='downloads' smooth={ true } style={{ cursor: 'pointer' }}>Download</Link>
                        </li>
                        <li className='docBtn'>
                            <a href="/documentation/api">Documentation</a>
                        </li>
                    </div>
                </div>
            </div>
            <div className='analytics'>
                <div className='mod'>
                    <div className='svg'><SvgMods/></div>
                    <div className='modText'>Moderator count</div>
                    <div className='modCount'>10</div>
                </div>

                <div className='bp'>
                    <div className='svg2'><SvgDatabase2/></div>
                    <div className='bpText'>Banned player count</div>
                    <div className='bpCount'>{playerBans}</div>
                </div>
            </div>
        </div>
    )
}

export default Hero