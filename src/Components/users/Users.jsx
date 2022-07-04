import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Users = ({ pad, totalUser, max }) => {

    let avtarArray = [];
    for (let i = 0; i < (totalUser / 5); i++) {
        avtarArray.push("https://www.animationmagazine.net/wordpress/wp-content/uploads/Unknown-2-7.jpg","https://cortoefieno.it/wp-content/uploads/2020/09/spring-anteprima.jpg","https://bizimages.withfloats.com/actual/60e0629d1eb0770001a38755.jpg","https://www.superprof.com/images/teachers/teacher-home-final-year-animation-student-offering-animation-modelling-lessons-london-both-face-face-and-online.jpg")
    }

    return (
        <div className="groupUser">
            <AvatarGroup sx={{
                gap: 2,
                display: 'flex',
                flexWrap: 'wrap',
                padding: pad,
                justifyContent: "start"
            }}
                max={max}>
                {
                    avtarArray.map((item, index) => {
                        return (
                            <Avatar key={index} alt="Remy Sharp" src={item} />
                        )
                    })
                }
            </AvatarGroup>
        </div>

    )
}

export default Users