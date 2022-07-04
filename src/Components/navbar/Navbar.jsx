// import style from navbar.scss folder
import './navbar.scss'
// import icon from mui library
import { Search, Notifications, Settings } from '@mui/icons-material'

const Navbar = () => {
  return (
    // navbar container
    <div className='navbar'>
      {/* navbar search section */}
      <div className="searchBox">
        <Search className='icon' />
        <input type="text" placeholder='Search here' />
      </div>

      {/* navbar user information section */}
      <div className="userBox">
        <div className="userNotification">
          <ul>
            <li><Notifications className='icon' />
              {/* notification for user */}
              <span className='notificationCount'>1</span></li>
            <li><Settings className="icon" /></li>
          </ul>
        </div>
        {/* navbar user profile image */}
        <div className="userProfile">
          <div className="userImage">
            <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="" />
            <span></span>
          </div>
          {/* current user name */}
          <div className="userName">satish_kumar</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar