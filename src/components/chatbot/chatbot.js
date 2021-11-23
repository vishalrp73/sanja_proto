import './chatbot.css';

import message_icon from '../../img/message-icon.png';
import { angryReact } from '../../functions/angryReact';

const Chatbot = () => {

    return (
        <div className = 'chatbot-wrapper'>
            <img src = { message_icon } className = 'message-icon'
                onClick = { () => angryReact() } />
        </div>
    )
}

export default Chatbot;