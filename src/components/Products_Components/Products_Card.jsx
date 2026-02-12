import PropTypes from 'prop-types';

export default function ProductCard({
                                        title,
                                        description,
                                        imageSrc,
                                        imageAlt,
                                        ingredients,
                                        reverse = false
                                    }) {
    const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";

    return (
        <div className={`flex flex-col ${flexDirection} items-center gap-8 md:gap-12 mb-16 md:mb-20`}>
            <div className="md:w-1/2">
                <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                    <img src={imageSrc} alt={imageAlt} className="h-3/4" />
                </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                    {description}
                </p>
                <div className="max-w-md mx-0 px-4 py-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                {ingredient}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    reverse: PropTypes.bool
};