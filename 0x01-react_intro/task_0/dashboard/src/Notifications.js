import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import {getLatestNotification} from './utils';


const Notifications = () => {
    return ( 
        <div className="Notifications">
            <p>Here is the list of Notifications</p>
            <button style={{
            float: 'right',
            marginTop: '-70px',
            backgroundColor: '#fff',
            border: 'none',
            }} aria-label='Close'>
            <img src={closeIcon} alt='close' />
            </button>
            <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li data-priority="urgent"
                dangerouslySetInnerHTML={{
                    __html: getLatestNotification(),
                }}></li>
            </ul>
        </div>
     );
}
 
export default Notifications;