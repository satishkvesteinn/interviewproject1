import { Token } from '@mui/icons-material'
import './rank.scss'

const Rank = () => {

    const user = [
        {
            id: 1,
            userImage: "https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg",
            userName: "Satish",
            followers: 12132,
            newFollowers: 123,
            color: "orange",
        },

        {
            id: 2,
            userImage: "https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg",
            userName: "Satish",
            followers: 12132,
            newFollowers: 123,
            color: "yellow"
        },

        {
            id: 3,
            userImage: "https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg",
            userName: "Satish",
            followers: 12132,
            newFollowers: 123,
            color: "red"
        },
    ]

    return (
        <div className='rank'>
            <div className="rankTitle">
                <Token className='icon' />
                <span>Work rank</span>
            </div>

            {
                user.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <hr className="divider" />
                                <div className="userContainer">
                                    <div className="userContainerTop">
                                        <img src={item.userImage} alt="" />
                                        <div className="userNameAndFollowers">
                                            <span className="userName">{item.userName}</span>
                                            <span className="userFollowers">{item.followers} followers</span>
                                        </div>
                                    </div>
                                    <span className='newFollowers' style={{ color: `${item.color}` }}>{item.newFollowers}</span>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            <hr className="divider" />
            <div className="userContainer allUser">
                <span>To see all</span>
            </div>
        </div>
    )
}

export default Rank