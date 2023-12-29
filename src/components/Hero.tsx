import { HiArrowSmRight } from "react-icons/hi";
import heroMain from '../assets/heroMain.jpg';
import heroMain2 from '../assets/heroMain2.jpg';
import heroMain3 from '../assets/heroMain3.jpg';





const Hero = () => {
    return (
        <div className="container">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
                    <img className="w-full" src={heroMain} alt='coffee Shop' />

                    <div className="absolute max-w-[470px]sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-2xl hidden sm:block">100% Organic</p>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">Best Coffee Shop in the Bay</h2>
                        <p className=" text-xl pt-4 font-bold sm:pt-8">Check out our specials</p>
                        <div className="font-medium text-red-600 text-2xl sm:text-4xl pd-4 sm:pb-8">NEW ITEMS</div>
                        <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center
                    gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">SHOP NOW <HiArrowSmRight />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-full w-full object-cover rounded-lg"
                        src={heroMain2}
                        alt="sub homepage photo"
                    />
                    <div className="absolute max-w-[470px]sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold">In a hurry?</h2>
                        <p className="text-red-700 text-xl pt-3">Download Our App</p>
                        <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center
                    gap-4 px-4 py-2 text-[14px] cursor-pointer">Download <HiArrowSmRight />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-full w-full object-cover rounded-lg"
                        src={heroMain3}
                        alt="sub homepage photo"
                    />
                    <div className="absolute max-w-[470px]sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold">Check what's new!</h2>
                        <p className="text-red-700 text-xl pt-3">Gifts for your favorite coffee lover</p>
                        <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center
                    gap-4 px-4 py-2 text-[14px] cursor-pointer">New Specials<HiArrowSmRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero; 
