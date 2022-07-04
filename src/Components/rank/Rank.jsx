import { Token } from '@mui/icons-material'
import './rank.scss'

const Rank = () => {
    // rank data in arary form
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
        // rank container
        <div className='rank'>
            {/* rank title */}
            <div className="rankTitle">
                <Token className='icon' />
                <span>Work rank</span>
            </div>

            {
                // fetching data from array using map function
                user.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                {/* divider */}
                                <hr className="divider" />
                                {/* rank user container */}
                                <div className="userContainer">
                                    <div className="userContainerTop">
                                        {/* rank user image */}
                                        <img src={item.userImage} alt="" />
                                        <div className="userNameAndFollowers">
                                            {/* rank user name */}
                                            <span className="userName">{item.userName}</span>

                                            {/* rank user followers */}
                                            <span className="userFollowers">{item.followers} followers</span>
                                        </div>
                                    </div>
                                    {/* user follower increase in a month */}
                                    <span className='newFollowers' style={{ color: `${item.color}` }}>{item.newFollowers}</span>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            {/* divider */}
            <hr className="divider" />
            <div className="userContainer allUser">
                {/* see all rank users */}
                <span>To see all</span>
            </div>
        </div>
    )
}

export default Rank