import { useCartContext } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import { RiStarSmileFill } from "react-icons/ri";
import { RiStarSmileLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";


interface propsType {
    img: string,
    name: string,
    price: string,
}

const ProductCard: React.FC<propsType> = ({ img, name, price }) => {
    const { addToCart } = useCartContext();

    const addProductToCart = () => {
        toast.success("Added To Cart!");
        addToCart({ img, name, price });
    };

    return (
        <div className='border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform'>
            <img className='object-cover h-[100px]w-[100px] cursor-pointer' src={img} alt={name} />
            <div className='space-y-2 relative p-4'>
                <div className='text-yellow-400 flex gap-[2px] text-[20px]'>
                    <RiStarSmileFill />
                    <RiStarSmileFill />
                    <RiStarSmileFill />
                    <RiStarSmileFill />
                    <RiStarSmileLine />
                </div>
                <h3 className='font-medium'>{name}</h3>
                <h3 className='text-2xl font-medium text-red-600'>{price}</h3>
                <button className='absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px]
                rounded-full grid place-items-center cursor-pointer hover:bg-accentDark'
                    onClick={addProductToCart}
                >
                    <IoBagOutline />

                </button>
            </div>
        </div>
    )
}

export default ProductCard; 
