import './discussion.scss';
import { Token } from '@mui/icons-material';
import Users from '../users/Users';





const Discussion = () => {
    return (
        <div className='discussion'>
            <div className="discussionTitle">
                <Token className='icon' />
                <span>Discussion groups</span>
            </div>
            <hr className="divider" />
            <div className="groupContainer">
                <div className="groupContainerHeading">
                    <span className="groupName">RDD UI Design</span>
                    <span className='date'>5 March</span>
                </div>
                <span className="groupDesc">All of these box-shadow were copied using </span>
            </div>
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