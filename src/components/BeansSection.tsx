import ProductCard from "./ProductCard";
import beanBlends from '../assets/beanBlends0.jpg';
import beanBlends1 from '../assets/beanBlends1.jpg';
import beanBlends2 from '../assets/beanBlends2.jpg';
import beanBlends3 from '../assets/beanBlends3.jpg';
import beanBlends4 from '../assets/beanBlends4.jpg';
import beanBanner from '../assets/beansBanner.jpg';


export const beanData = [
    {
        id: 1,
        img: beanBlends,
        name: "Breve Blend",
        price: "$12.00",
    }, {
        id: 2,
        img: beanBlends1,
        name: "Early Bird Blend",
        price: "$10.00",
    }, {
        id: 3,
        img: beanBlends2,
        name: "Battle creek Blend",
        price: "$15.00",
    }, {
        id: 4,
        img: beanBlends3,
        name: "Sweetheart Blend",
        price: "$16.00",
    }, {
        id: 5,
        img: beanBlends4,
        name: "Little Nap Blend",
        price: "$14.00",
    },
]




const BeansSection = () => {
    return (
        <div className="container pt-16">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">Bean Blends</h3>
                    <p className="text-gray-600 mt-2">
                        Hand selected by our master roasters to ensure peak flavor
                    </p>
                </div>
                <div className="space-x-4 mt-8 lg:mt-0">
                    <button className="hover:feature_btn text-gray-600">Merch</button>
                    <button className="text-gray-600 hover:text-accent hover:feature_btn hover:text-white">
                        Pastry Menu
                    </button>
                    <button className="text-gray-600 hover:text-accent hover:feature_btn hover:text-white">
                        Single Origin
                    </button>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img className="w-full h-full object-cover"
                        src={beanBanner}
                        alt="banner" />
                </div>
                {beanData.slice(0, 4).map(el => (
                    <ProductCard
                        key={el.id}
                        img={el.img}
                        name={el.name}
                        price={el.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default BeansSection; 
