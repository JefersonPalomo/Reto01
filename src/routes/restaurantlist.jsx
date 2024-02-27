import React, { useState } from 'react';

const restaurantData = [
    {
        id: 1,
        name: 'Seafood Paradise',
        category: 'Comida de mar',
    },
    {
        id: 2,
        name: 'Asian Delight',
        category: 'Comida asiatica',
    },
    {
        id: 3,
        name: 'Quick Bites',
        category: 'Comida Rapida',
    },
    {
        id: 4,
        name: 'Italiano Express',
        category: 'Comida Italiana',
    },
    {
        id: 5,
        name: 'Local Flavors',
        category: 'Comida tipica',
    },
];

const RestaurantList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold mb-4">Explore Restaurants</h2>
            <div className="flex space-x-4 mb-4">
                <button 
                    className={`px-4 py-2 rounded-lg ${selectedCategory === 'Comida de mar' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`} 
                    onClick={() => handleCategoryChange('Comida de mar')}
                >
                    Comida de mar
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurantData
                    .filter((restaurant) => !selectedCategory || restaurant.category === selectedCategory)
                    .map((restaurant) => (
                        <div key={restaurant.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                            <p className="text-gray-600 mb-2">{restaurant.category}</p>
                            {/* Otros detalles del restaurante */}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RestaurantList;
