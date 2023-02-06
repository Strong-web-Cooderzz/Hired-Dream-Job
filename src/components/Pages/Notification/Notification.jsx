import React from 'react';
import './Notification.css';
import notificationBell from '../../../../src/assets/notification-bell.svg';

const Notification = () => {
    return ( 
        <div class="container">
            <div class ="iconImg">
            <img src={notificationBell} alt="" />
            </div>
            
            <div class ="counter">3</div>
        </div>
    );
};

export default Notification;
