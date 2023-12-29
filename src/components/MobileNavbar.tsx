import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";



const MobileNavbar = ({ setShowCart }: any) => {
    return (
        <div className='sticky top-0 bg-white z-10'>
            <div className='container p-8 lg:hidden'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-6 cursor-pointer'>
                        <FiMenu size={30} />
                        <FaSearch size={21} />
                    </div>

                    <h1 className="text-4xl">Breve</h1>

                    <div className="flex gap-4 ml-8 text-[30px] cursor-pointer">
                        <FaRegUser />
                    </div>
                    <div className="relative cursor-pointer"
                        onClick={() => setShowCart(true)}
                    >
                        <AiOutlineShoppingCart size={30} />
                        <CartCountBadge size="w-[20px] h-[20px]" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MobileNavbar; 
