import Cart from '../../Components/cart/Cart'
import Discussion from '../../Components/discussion/Discussion'
import Navbar from '../../Components/navbar/Navbar'
import Notification from '../../Components/notification/Notification'
import Rank from '../../Components/rank/Rank'
import Sidebar from '../../Components/sidebar/Sidebar'
import Users from '../../Components/users/Users'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className="homeLeft">
        <Sidebar />
      </div>
      <div className="homeRight">
        <Navbar />

        <div className="homeRightContent">
          <div className="top">
            <div className="left">
              <Cart />
              <div className="leftContainer">
                <Rank />
                <Discussion />
              </div>
            </div>
            <div className="right">
              <Notification />
            </div>
          </div>
          <div className="bottom">
            <span>New realesed : </span>
            <Users pad={1} max={3} totalUser={50} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home