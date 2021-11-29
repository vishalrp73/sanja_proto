import './homePanel.css';

import { Link } from 'react-router-dom';
import {ReactComponent as Backing} from '../../img/home/backing-1.svg';

const HomePanel = (props) => {
    
    return (
        <div className = 'home-panel'>
            <div className = 'panel-left'>
                <h3 className = 'panel-title'>{props.title}</h3>
                <p className = 'panel-text'>{props.text}</p>

                <Link to = { props.link } >
                    <input type = 'button' value = {props.btn_value} style = {{cursor: 'pointer'}}
                        className = 'panel-btn' />
                </Link>
            </div>

            <div className = 'panel-right' style={{background: <Backing/>, backgroundSize: 'contain'}}>
                <img src = {props.img} className = 'panel-img' alt = 'great-success'/>
            </div>
        </div>
    )
}

export default HomePanel;