import { ReactNode, createContext, useContext, useState } from "react";

interface ICartContext {
    product: any[];
    addToCart: (cart: any) => void;
    removeFromCart: (productName: string) => void;
}

const CartContext = createContext<ICartContext>({
    product: [],
    addToCart: () => { },
    removeFromCart: () => { },
});

interface ICartContextProvider {
    children: ReactNode
}

export const CartContextProvider = ({ children }: ICartContextProvider) => {
    const [product, setProduct] = useState<any>([]);
    console.log('Product in CartContext:', product);

    const addToCart = (cart: any) => {
        setProduct((prevCart: any) => [...prevCart, cart])
    };

    const removeFromCart = (productName: any) => {
        console.log('Removing from Cart:', productName)
        setProduct((prevCart: any) => prevCart.filter((item: any) => item.name !== productName))
    }

    return (
        <CartContext.Provider value={{ product, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    return context;
};

