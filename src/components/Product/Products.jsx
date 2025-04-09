import React from 'react'
import { useState, useEffect } from 'react';
import SidebarHorizontal from '../Sidebars/SidebarHorizontal'
import SidebarVertical from '../Sidebars/SidebarVertical'
import ProductGrid from '../Cards/ProductGrid'

function Products() {

    const allProducts = [
        { id: 1, name: 'Smart Watch', category: 'Electronics', price: 99.99, image: '/images/ShopeProducts/watch.jpg' },
        { id: 2, name: 'Sneakers', category: 'Fashion', price: 59.99, image: '/images/ShopeProducts/shoes.jpg' },
        { id: 3, name: 'Wireless Earbuds', category: 'Electronics', price: 49.99, image: '/images/ShopeProducts/earbuds.jpg' },
        { id: 4, name: 'Winter Jacket', category: 'Fashion', price: 120.99, image: '/images/ShopeProducts/jacket.jpg' },
        { id: 5, name: 'Coffee Machine', category: 'Home', price: 89.99, image: '/images/ShopeProducts/coffee-machine.jpg' },
        { id: 6, name: 'Smartphone', category: 'Electronics', price: 799.99, image: '/images/ShopeProducts/smartphone.jpg' },
        { id: 7, name: 'LED Lamp', category: 'Home', price: 29.99, image: '/images/ShopeProducts/lamp.jpg' },
        { id: 8, name: 'Jeans', category: 'Fashion', price: 39.99, image: '/images/ShopeProducts/jeans.jpg' },
        { id: 9, name: 'Bluetooth Speaker', category: 'Electronics', price: 69.99, image: '/images/ShopeProducts/speaker.jpg' },
        { id: 10, name: 'Leather Jacket', category: 'Fashion', price: 179.99, image: '/images/ShopeProducts/leather-jacket.jpg' },
        { id: 11, name: 'Electric Kettle', category: 'Home', price: 35.99, image: '/images/ShopeProducts/kettle.jpg' },
        { id: 12, name: 'Smart TV', category: 'Electronics', price: 399.99, image: '/images/ShopeProducts/smart-tv.jpg' },
        { id: 13, name: 'Sneaker Backpack', category: 'Fashion', price: 39.99, image: '/images/ShopeProducts/backpack.jpg' },
        { id: 14, name: 'Cordless Vacuum', category: 'Home', price: 149.99, image: '/images/ShopeProducts/vacuum.jpg' },
        { id: 15, name: 'Smart Home Hub', category: 'Electronics', price: 129.99, image: '/images/ShopeProducts/smart-home-hub.jpg' },
        { id: 16, name: 'Wool Sweater', category: 'Fashion', price: 89.99, image: '/images/ShopeProducts/sweater.jpg' },
        { id: 17, name: 'Coffee Grinder', category: 'Home', price: 24.99, image: '/images/ShopeProducts/grinder.jpg' },
        { id: 18, name: 'Digital Camera', category: 'Electronics', price: 499.99, image: '/images/ShopeProducts/camera.jpg' },
        { id: 19, name: 'Fashionable Watch', category: 'Fashion', price: 109.99, image: '/images/ShopeProducts/fashion-watch.jpg' },
        { id: 20, name: 'Air Purifier', category: 'Home', price: 159.99, image: '/images/ShopeProducts/air-purifier.jpg' },
        { id: 21, name: 'Smart LED Bulb', category: 'Home', price: 19.99, image: '/images/ShopeProducts/smart-bulb.jpg' },
        { id: 22, name: 'Gaming Mouse', category: 'Electronics', price: 49.99, image: '/images/ShopeProducts/gaming-mouse.jpg' },
        { id: 23, name: 'Portable Charger', category: 'Electronics', price: 29.99, image: '/images/ShopeProducts/portable-charger.jpg' },
        { id: 24, name: 'T-shirt', category: 'Fashion', price: 19.99, image: '/images/ShopeProducts/tshirt.jpg' },
        { id: 25, name: 'Winter Boots', category: 'Fashion', price: 89.99, image: '/images/ShopeProducts/boots.jpg' },
        { id: 26, name: 'Electric Blanket', category: 'Home', price: 69.99, image: '/images/ShopeProducts/electric-blanket.jpg' },
        { id: 27, name: 'Smart Door Lock', category: 'Home', price: 199.99, image: '/images/ShopeProducts/smart-lock.jpg' },
        { id: 28, name: 'Noise Cancelling Headphones', category: 'Electronics', price: 129.99, image: '/images/ShopeProducts/noise-cancelling-headphones.jpg' },
        { id: 29, name: 'Gaming Headset', category: 'Electronics', price: 79.99, image: '/images/ShopeProducts/gaming-headset.jpg' },
        { id: 30, name: 'Smart Fitness Band', category: 'Electronics', price: 49.99, image: '/images/ShopeProducts/fitness-band.jpg' },
        { id: 31, name: 'Yoga Mat', category: 'Home', price: 25.99, image: '/images/ShopeProducts/yoga-mat.jpg' },
        { id: 32, name: 'Skincare Set', category: 'Fashion', price: 39.99, image: '/images/ShopeProducts/skincare-set.jpg' },
        { id: 33, name: 'Electric Toothbrush', category: 'Home', price: 49.99, image: '/images/ShopeProducts/electric-toothbrush.jpg' },
        { id: 34, name: 'Designer Sunglasses', category: 'Fashion', price: 149.99, image: '/images/ShopeProducts/sunglasses.jpg' },
        { id: 35, name: 'Smart Thermostat', category: 'Home', price: 120.99, image: '/images/ShopeProducts/smart-thermostat.jpg' },
        { id: 36, name: 'Fitness Tracker', category: 'Electronics', price: 79.99, image: '/images/ShopeProducts/fitness-tracker.jpg' },
        { id: 37, name: 'Smart Scale', category: 'Home', price: 99.99, image: '/images/ShopeProducts/smart-scale.jpg' },
        { id: 38, name: 'Laptop Stand', category: 'Electronics', price: 39.99, image: '/images/ShopeProducts/laptop-stand.jpg' },
        { id: 39, name: 'LED Desk Lamp', category: 'Home', price: 34.99, image: '/images/ShopeProducts/led-desk-lamp.jpg' },
        { id: 40, name: 'Classic Watch', category: 'Fashion', price: 129.99, image: '/images/ShopeProducts/classic-watch.jpg' },
        { id: 41, name: 'Yoga Ball', category: 'Sports', price: 19.99, image: '/images/ShopeProducts/yoga-ball.jpg' },
        { id: 42, name: 'Tennis Racket', category: 'Sports', price: 69.99, image: '/images/ShopeProducts/tennis-racket.jpg' },
        { id: 43, name: 'Toy Robot', category: 'Toys', price: 29.99, image: '/images/ShopeProducts/toy-robot.jpg' },
        { id: 44, name: 'Action Figure', category: 'Toys', price: 14.99, image: '/images/ShopeProducts/action-figure.jpg' },
        { id: 45, name: 'Face Cream', category: 'Beauty', price: 25.99, image: '/images/ShopeProducts/face-cream.jpg' },
        { id: 46, name: 'Shampoo', category: 'Beauty', price: 9.99, image: '/images/ShopeProducts/shampoo.jpg' },
    ];

    const [filterState, setFilterState] = useState({
        category: '',
        priceRange: [0, 500],
    });

    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    useEffect(() => {
        const { category, priceRange } = filterState;
        const filtered = allProducts.filter((product) => {
            const matchesCategory = category ? product.category === category : true;
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            return matchesCategory && matchesPrice;
        });
        setFilteredProducts(filtered);
    }, [filterState]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        if (name === 'category') {
            setFilterState((prev) => ({ ...prev, category: value }));
        } else if (name === 'priceRange') {
            const rangeValue = value.split(',').map((val) => parseInt(val, 10)); // Split and convert to numbers
            setFilterState((prev) => ({ ...prev, priceRange: rangeValue }));
        }
    };

    return (
        <div>
            <section className="py-10 px-4 lg:px-8 bg-gray-50 min-h-screen">
                <div className="flex flex-col lg:flex-row gap-6">
                    <SidebarVertical
                        filterState={filterState}
                        handleFilterChange={handleFilterChange}
                    />
                    <div className="flex-1">
                        <SidebarHorizontal />
                        <ProductGrid products={filteredProducts} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;
