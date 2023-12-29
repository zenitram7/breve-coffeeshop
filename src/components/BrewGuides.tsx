interface propsType {
    img: string,
    title: string,
    about: string,
}


const BrewGuides: React.FC<propsType> = ({ img, title, about }) => {
    return (
        <div className='space-y-4'>
            <img
                className='rounded-lg hover:scale-105 transition-transform cursor-pointer'
                src={img}
                alt='post'

            />
            <div className='text-accent font-medium'>
                <span>{about}</span>
            </div>
            <h3 className='font-bold text-xl'>{title}</h3>
        </div>
    )
}

export default BrewGuides; 
