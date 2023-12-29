import React from 'react'
import { useCartContext } from '../context/CartContext';


interface propsType {
    size: string;
}

const CartCountBadge: React.FC<propsType> = ({ size }) => {

    const { product } = useCartContext();
    return (
        <div className={`absolute bg-red-600 text-white text-[15px] ${size} -right-2
-top-2  rounded-full grid`}>
            {product.length}
        </div>
    )
}

export default CartCountBadge; 
