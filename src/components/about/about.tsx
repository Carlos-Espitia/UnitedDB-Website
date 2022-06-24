import './about.scss'
import variables from '../../scss/Variables.module.scss';
import { cards } from './cards';


function about() {
    return(
        <div className='about'>
            <h1>Why you should use United<label style={{ color: variables.primaryColor }}>DB</label></h1>
            <div className='wrapper'>
                <div className='cards'>
                    {cards.map((item, index) => { //loops thrugh all items
                            return (
                                <div className='card'>
                                    <h2>{item.title}</h2>
                                    <h3>{item.description}</h3>
                                    {item.icon}
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default about