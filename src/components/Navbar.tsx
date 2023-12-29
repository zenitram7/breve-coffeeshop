import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai"
import CartCountBadge from "./CartCountBadge";



const Navbar = ({ setShowCart }: any) => {
    return (
        <div className="sticky top-0 bg-white z-10">
            <div className="container hidden lg:block">
                <div className="flex justify-between items-center p-8">
                    <h1 className="text-4xl font-medium">Breve Coffee Co.</h1>
                    <div className="relative w-full max-w-[500px]">
                        <input className="bg-[#f2f3f5] border-none 
                        outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product" />
                        <FaSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 cursor-pointer" size={20}

                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="icon_wrapper">
                            <FaRegUser
                                className=" cursor-pointer"
                            />
                        </div>
                        <div className="icon_wrapper relative cursor-pointer"
                            onClick={() => setShowCart(true)}>
                            <AiOutlineShoppingCart className="cursor-pointer" />
                            <CartCountBadge size="w-[25px] h-[25px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar; 
