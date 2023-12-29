import { RxCross2 } from "react-icons/rx";
import { useCartContext } from "../context/CartContext";


interface propsType {
    img: string;
    name: string;
    price: string;
}


const CartProduct: React.FC<propsType> = ({ img, name, price, }) => {
    const { removeFromCart } = useCartContext();

    const handleRemove = () => {
        removeFromCart(name);
    }
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img className="h-[100px] rounded-lg py-1 object-cover w-[90px]" src={img} alt={name} />
                <div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-gray-600">1 x {price}</p>
                </div>
            </div>
            <RxCross2 className='cursor-pointer'
                onClick={handleRemove}
            />
        </div>
    )
}

export default CartProduct;



