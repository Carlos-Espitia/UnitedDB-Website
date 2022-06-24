import './downloads.scss'
import variables from '../../scss/Variables.module.scss';
import SvgDiscord from '../../iconComponents/Discord';



function downloads() {
    return(
        <div className='downloads'>

            <div className='invite'>
                <div className='text'>Invite United<label style={{ color: variables.primaryColor }}>DB</label> discord bot</div>
                <div className='svg'><SvgDiscord/></div>
                <li className='btn'>
                    <a href="/">Invite</a>
                </li>
            </div>
            <div className='plugins'>
            </div>
        </div>
    )
}

export default downloads