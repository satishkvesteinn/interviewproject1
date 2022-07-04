// import style from discussion.scss folder
import './discussion.scss';
// import icon form mui library
import { Token } from '@mui/icons-material';
// import user folder from users.jsx
import Users from '../users/Users';

const Discussion = () => {
    return (
        // discussion container
        <div className='discussion'>
            {/* discussion title style */}
            <div className="discussionTitle">
                {/* icon */}
                <Token className='icon' />
                <span>Discussion groups</span>
            </div>
            {/* section divider */}
            <hr className="divider" />
            {/* user container */}
            <div className="groupContainer">
                <div className="groupContainerHeading">
                    <span className="groupName">RDD UI Design</span>
                    <span className='date'>5 March</span>
                </div>
                <span className="groupDesc">All of these box-shadow were copied using </span>
            </div>
            {/* passing arrgument users folder */}
            <Users pad={2} max={6} totalUser={20} />
            <hr className="divider" />
            <div className="groupContainer">
                <div className="groupContainerHeading">
                    <span className="groupName">RDD Illustrations</span>
                    <span className='date'>5 March</span>
                </div>
                <span className="groupDesc">All of these box-shadow were copied using </span>
            </div>
            <Users pad={2} max={4} totalUser={5} />
        </div >
    )
}

export default Discussion