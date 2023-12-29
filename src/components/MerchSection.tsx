import ProductCard from "./ProductCard";
import merchSection0 from '../assets/merchSection0.jpg';
import merchSection1 from '../assets/merchSection1.jpg';
import merchSection2 from '../assets/merchSection2.jpg';
import merchSection3 from '../assets/merchSection3.jpg';
import merchBanner from '../assets/merchBanner.jpg';


export const merchData = [
    {
        id: 6,
        img: merchSection0,
        name: "Breve Hat",
        price: "$20.00",
    }, {
        id: 7,
        img: merchSection1,
        name: "Breve Graphic Tee",
        price: "$25.00",
    }, {
        id: 8,
        img: merchSection2,
        name: "Heavy Duty French Press",
        price: "$20.00",
    }, {
        id: 9,
        img: merchSection3,
        name: "Breve Chemex",
        price: "$18.00",
    },
]




const MerchSection = () => {

    return (
        <div className="container pt-16">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">Coffee Merchandise</h3>
                    <p className="text-gray-600 mt-2">
                        Look good with our merch from your swig to your swag
                    </p>
                </div>
                <div className="space-x-4 mt-8 lg:mt-0">
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img className="w-full h-full object-cover"
                        src={merchBanner}
                        alt="banner" />
                </div>
                {merchData.slice(0, 4).map(el => (
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

export default MerchSection; 