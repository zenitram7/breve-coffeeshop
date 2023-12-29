import bottomBanner from '../assets/bottomBanner.jpg';
import bottomBanner2 from '../assets/bottomBanner2.jpg';


const Banner = () => {

    const openGoogleMaps = (cityName: any) => {
        const url = `https://www.google.com/maps?q=${encodeURIComponent(cityName)}`;
        window.open(url, "_blank")
    }
    return (

        <div className="container pt-16">
            <h1 className="font-bold text-2xl text-center py-5">Locations</h1>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="overflow-hidden rounded-lg">
                    <img className="hover:scale-105 transition-transform cursor-pointer"
                        src={bottomBanner}
                        alt="banner"
                        onClick={() => openGoogleMaps("San Francisco, CA 94102")}
                    />
                    <p className="font-bold text-center py-5">1234 Shore Rd. San Francisco, CA 94102</p>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img className="hover:scale-105 transition-transform cursor-pointer"
                        src={bottomBanner2}
                        alt="banner"
                        onClick={() => openGoogleMaps("West Pittsburg, CA 94565")}
                    />
                    <p className="font-bold text-center py-5">5678 Clement Ave. West Pittsburg, CA 94565</p>
                </div>
            </div>
        </div>
    )
}

export default Banner; 
