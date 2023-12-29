import BrewGuides from "./BrewGuides";
import pourOver from '../assets/pourOver.jpg';
import frenchPress from '../assets/frenchPress.jpg';
import coldBrew from '../assets/coldBrew.jpg';

const data = [
    {
        id: 0,
        img: pourOver,
        title: 'Perfect the Pour Over',
        about: 'Master the time-tested pour over Method we use in our cafes.',
    }, {
        id: 1,
        img: frenchPress,
        title: 'French Press Patience',
        about: 'Patience, Hot Water, and Coffee; the great beginning to a beautiful day.',
    }, {
        id: 2,
        img: coldBrew,
        title: 'Ultimate Cold Brew ',
        about: 'Our simple & great tasting method. All you need is Water, Coffee, & time.',
    },
]




const BrewGuidesSection = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Brew Methods</h2>
            <p className="text-gray-500">Our behind the counter methods brought to your kitchen</p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el) => (
                    <BrewGuides
                        key={el.id}
                        img={el.img}
                        title={el.title}
                        about={el.about}
                    />
                ))}
            </div>
        </div>
    )
}

export default BrewGuidesSection
