import FeaturedCard from "./FeaturedCard";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineHandshake } from "react-icons/md";
import { MdAppShortcut } from "react-icons/md";
import { ImSmile } from "react-icons/im";



const data = [
    {
        id: 0,
        title: "Free Shipping for orders over $50",
        icon: < BsBoxSeam />
    }, {
        id: 1,
        title: "100% Organic & Free Trade Certified",
        icon: <MdOutlineHandshake />
    }, {
        id: 2,
        title: "Member Perks for those who download the app",
        icon: <MdAppShortcut />
    }, {
        id: 3,
        title: "Great Customer experiences guarranteed",
        icon: <ImSmile />

    },

]

const BottomFeatured = () => {
    return (
        <div className="container pt-16">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map((el) => (
                    <FeaturedCard
                        key={el.id}
                        title={el.title}
                        icon={el.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default BottomFeatured; 
