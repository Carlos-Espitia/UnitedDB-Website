/* eslint-disable jsx-a11y/anchor-is-valid */
import './api.scss';
import variables from '../../scss/Variables.module.scss';
import { apis } from './apis';

// all html tags got styles, might mess u up


function Docapi() {
    return(
        <div className='docapi'>
            <h1>United<label style={{ color: variables.primaryColor }}>DB</label> API</h1>
            {apis.map((item, index) => { //loops thrugh all items

                var methodColor: string = ''
                if(item.method === 'GET') methodColor = '#AA55FF'
                if(item.method === 'POST') methodColor = '#00881B'
                if(item.method === 'DELETE') methodColor = '#C61300'
                
                var padding: string = ''
                if(item.note) {
                    padding = '2px 3px 3px 3px'
                }

                var header: string = ''
                if(item.header.length !== 0) header = 'Header\n'
                var body: string = ''
                if(item.body.length !== 0) body = 'Body\n'

                return (
                    <div className='apis'>
                        <h2>{item.description}</h2>
                        <div className='note' style={{ padding: padding}}>{item.note}</div>
                        
                        <div className='api'><div className='method' style={{ background: methodColor }}>{item.method}</div>{item.api}</div>

                        <div className='header'>
                            <div className='headert'>{header}</div>
                            <div className='headerinfo'>
                                {item.header.map((header) => {
                                    return (<div>{header}</div>)
                                })}
                            </div>
                        </div>
                        <div className='body'>
                            <div className='bodyt'>{body}</div>
                            <div className='bodyinfo'>
                                {item.body.map((body) => {
                                    return (<div>{body}</div>)
                                })}
                            </div>
                        </div>
                        {/* <div className='body'>
                            <div className='bodyt'>{body}</div>
                            <div className='bodyinfo'>{item.body.reason}{item.body.proof}</div>
                        </div> */}

                    </div>

                )
            })}
        </div>
    )
}

export default Docapi