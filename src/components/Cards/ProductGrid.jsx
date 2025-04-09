import React from 'react';

function ProductGrid({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white p-4 shadow-sm rounded-lg">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-xl font-bold mt-2">${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
