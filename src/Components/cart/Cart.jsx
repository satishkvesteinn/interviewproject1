import { ChevronRight } from '@mui/icons-material'
import './cart.scss'

const Cart = () => {

    const item = [
        {
            id: 1,
            cartTitle: "Monthly visits",
            counter: 12342,
            image: "https://www.animationmagazine.net/wordpress/wp-content/uploads/Unknown-2-7.jpg",
            color: "green",
        },
        {
            id: 2,
            cartTitle: "Monthly visits",
            counter: 12342,
            image: "https://bizimages.withfloats.com/actual/60e0629d1eb0770001a38755.jpg",
            color: "orange",
        },
        {
            id: 3,
            cartTitle: "Monthly visits",
            counter: 12342,
            image: "https://cortoefieno.it/wp-content/uploads/2020/09/spring-anteprima.jpg",
            color: "red",
        },
    ]

    return (
        <div className='cart'>
            {
                item.map((data) => {
                    return (
                        <div className="item" key={data.id}>
                            <div className="cartTop">
                                <span className='title' style={{color: `${data.color}`}}>{data.cartTitle}</span>
                                <ChevronRight className='icon' />
                            </div>
                            <div className="cartBottom">
                                <h1 className="counter">{data.counter}</h1>
                                <div className="userImageContainer">
                                    <div className="userImage">
                                        <img src={data.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart