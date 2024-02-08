import React, { useState } from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    return (
        <div className="Notifications">
            <button
                onClick={toggleNotifications}
                style={{
                    float: 'right',
                    marginTop: '-70px',
                    backgroundColor: '#fff',
                    border: 'none',
                }}
                aria-label='Close'
            >
                <img src={closeIcon} alt='close' />
            </button>
            {showNotifications && (
                <div>
                    <p>Here is the list of Notifications</p>
                    <ul>
                        <li data-priority="default">New course available</li>
                        <li data-priority="urgent">New resume available</li>
                        <li
                            data-priority="urgent"
                            dangerouslySetInnerHTML={{
                                __html: getLatestNotification(),
                            }}
                        ></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Notifications;