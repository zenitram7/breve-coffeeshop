import CategoryCard from "./CategoryCard";
import beanBlends from '../assets/coffeeBeans.jpg';
import merch from '../assets/merch.jpg';
import pastryShop from '../assets/pastryShop.jpg';
import singleOrigin from '../assets/singleOrigin.jpg';


const data = [
    {
        id: 0,
        name: "Bean Blends",
        count: "5 Products",
        img: beanBlends,
    }, {
        id: 1,
        name: "Merch",
        count: "5 Products",
        img: merch,
    }, {
        id: 2,
        name: "Pastry Shop",
        count: "5 Products",
        img: pastryShop,
    }, {
        id: 3,
        name: "Single Origin",
        count: "5 Products",
        img: singleOrigin,
    },
]

const Category = () => {
    return (
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
                {data.map(el => (
                    <CategoryCard
                        key={el.id}
                        img={el.img}
                        name={el.name}
                        count={el.count}
                    />
                ))}
            </div>
        </div>
    )
}

export default Category
