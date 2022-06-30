import './downloads.scss'
import variables from '../../scss/Variables.module.scss';
import SvgDiscord from '../../iconComponents/Discord';
import SvgBdsx from '../../iconComponents/bdsx';
import SvgBerp from '../../iconComponents/berp';





function downloads() {
    return(
        <div className='downloads' id='downloads'>
            <div className='invite'>
                <div className='text'>Invite United<label style={{ color: variables.primaryColor }}>DB</label> Discord Bot</div>
                <div className='svg'><SvgDiscord/></div>
                <li className='btn'>
                    <a href="https://discord.com/api/oauth2/authorize?client_id=958167252652421230&permissions=8&scope=bot%20applications.commands">Invite</a>
                </li>
            </div>
            <div className='plugins'>
                <div className='text'>Download United<label style={{ color: variables.primaryColor }}>DB</label> Plugins</div>
                <div className='berp'>
                <div className='svg'><SvgBerp/></div>
                    <li className='btn'>
                        <a href="/">Berp Download</a>
                    </li>
                </div>
                <div className='bdsx'>
                    <div className='svg'><SvgBdsx/></div>
                    <li className='btn'>
                        <a href="/">BDSX Download</a>
                    </li>
                </div>

            </div>
        </div>
    )
}

export default downloads