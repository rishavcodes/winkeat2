import React from 'react';
import "../../src/styles/User.css";
import Sidebar from '../Components/Sidebar/Sidebar';

const User = () => {
  return (
    <div className='user-container'>
    <div className="user-page-body">
      <Sidebar />
      <div className="user-col">
        <div className="user-upper-part">
          <div className="user-info-grid">
            <div className="user-img">
              <img src="/images/user-img.jpg" alt="not available" />
            </div>
            <div className="user-info">
              <h2 className="user-name" >Rishav Jha</h2>
              <h4 className="user-userid" >rishav.codes</h4>
              <h4 className="user-email">2001010055@krmu.edu.in</h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="user-menu-list">
          <ul>
            <li>Your Orders</li>
            <li>Saved Cards</li>
            <li>Change Password</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </div>

    </div>
  )
}

export default User