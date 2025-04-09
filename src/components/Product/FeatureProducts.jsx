import React from 'react'
import ProductCard from './ProductCard'

function FeatureProducts() {
    const products = [

        {
            id: 1,
            name: 'Product 1',
            isBestSeller: true,
            image: '/images/Products/product1.jpg',
            price: 10,
            description: 'This is a cool product that does amazing things.'
        },

        {
            id: 2,
            name: 'Product 2',
            isBestSeller: true,
            image: '/images/Products/product2.jpg',
            price: 12,
            description: 'This is a cool product that does amazing things.'
        },

        {
            id: 3,
            name: 'Product 3',
            isBestSeller: true,
            image: '/images/Products/product3.jpg',
            price: 8,
            description: 'This is a cool product that does amazing things.'
        },

        {
            id: 4,
            name: 'Product 4',
            isBestSeller: true,
            image: '/images/Products/product4.jpg',
            price: 15,
            description: 'This is a cool product that does amazing things.'
        },

        {
            id: 5,
            name: 'Product 5',
            isBestSeller: true,
            image: '/images/Products/product5.jpg',
            price: 85,
            description: 'This is a cool product that does amazing things.'
        },

        {
            id: 6,
            name: 'Product 6',
            isBestSeller: true,
            image: '/images/Products/product6.jpg',
            price: 75,
            description: 'This is a cool product that does amazing things.'
        },

        {
            id: 7,
            name: 'Product 7',
            isBestSeller: true,
            image: '/images/Products/product7.jpg',
            price: 55,
            description: 'This is a cool product that does amazing things.'
        },

        {
            id: 8,
            name: 'Product 8',
            isBestSeller: true,
            image: '/images/Products/product8.jpg',
            price: 35,
            description: 'This is a cool product that does amazing things.'
        },

    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Best Sellers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.filter(p => p.isBestSeller).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureProducts
