import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <div className='relative select-none'>
                <img className='absolute inset-0 bg-cover w-screen h-screen z-0' src="https://img.freepik.com/foto-gratis/vista-superior-tortilla-mexicana-espacio-copia_23-2148614430.jpg" />
                <div className="relative z-10 container">
                    <div className='mx-auto p-8'>
                        <h2 className="text-3xl text-white font-semibold mb-8">Explore Restaurants</h2>
                        <div className="space-x-4 mb-4 flex flex-row item-center">
                            <Link to="/comida-de-mar">
                                <button
                                    className="h-30 mx-20 w-60 text-2xl px-4 py-2 rounded-lg bg-gray-300">
                                    Sea Food
                                </button>
                                <div className='flex items-center justify-center mt-7'>
                                    <img className='w-90 h-80' src="https://pics.craiyon.com/2023-06-12/334ae69061a143bcb8214cd234aa7f32.webp" />
                                </div>
                            </Link>

                            <Link to="/comida-rapida">
                                <button
                                    className="h-30 mx-20 w-60 text-2xl px-4 py-2 rounded-lg bg-gray-300">
                                    Fast Food
                                </button>
                                <div className='flex items-center justify-center mt-8'>
                                    <img className='w-80' src="https://static.vecteezy.com/system/resources/previews/028/206/639/non_2x/a-logo-design-for-a-fast-food-restaurant-hamburger-soft-drink-and-fries-vector.jpg" />
                                </div>
                            </Link>
                            <Link to="/asiatica">
                                <button
                                    className="h-30 mx-20 w-60 text-2xl px-4 py-2 rounded-lg bg-gray-300">
                                    Asian Food
                                </button>
                                <div className='flex items-center justify-center mt-16'>
                                    <img className='w-80 h-60' src="https://www.conclusion.com.ar/wp-content/uploads/2017/04/thai2.jpg" />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantList;
