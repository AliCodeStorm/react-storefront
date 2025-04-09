import React, { useState } from 'react';

function Category() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5); // Initially, show 5 categories

  // Categories data
  const categories = [
    { id: 1, name: "Electronics", slug: "electronics", image: "/images/Category/category1.jpg" },
    { id: 2, name: "Men's Fashion", slug: "mens-fashion", image: "/images/Category/category2.jpg" },
    { id: 3, name: "Women's Fashion", slug: "womens-fashion", image: "/images/Category/category3.jpg" },
    { id: 4, name: "Home & Living", slug: "home-living", image: "/images/Category/category4.jpg" },
    { id: 4, name: "Home & Living", slug: "home-living", image: "/images/Category/category4.jpg" },
    { id: 5, name: "Beauty & Health", slug: "beauty-health", image: "/images/Category/category5.jpg" },
    { id: 6, name: "Sports & Fitness", slug: "sports-fitness", image: "/images/Category/category6.jpg" },
    { id: 7, name: "Books", slug: "books", image: "/images/Category/category7.jpg" },
    { id: 8, name: "Toys & Games", slug: "toys-games", image: "/images/Category/category8.jpg" },
    { id: 9, name: "Automotive", slug: "home-living", image: "/images/Category/category9.jpg" },
    { id: 10, name: "Men's T-Shirts", slug: "mens-fashion", image: "/images/Category/category10.jpg" },
    { id: 11, name: "Groceries", slug: "electronics", image: "/images/Category/category11.jpg" },
    { id: 12, name: "Women's Dresses", slug: "womens-fashion", image: "/images/Category/category12.jpg" },
    { id: 13, name: "Kitchenware", slug: "home-living", image: "/images/Category/category13.jpg" },
    { id: 14, name: "Groceries", slug: "mens-fashion", image: "/images/Category/category14.jpg" },
    { id: 15, name: "Groceries", slug: "electronics", image: "/images/Category/category15.jpg" },
    { id: 16, name: "Kitchenware", slug: "home-living", image: "/images/Category/category16.jpg" },
    { id: 16, name: "Kitchenware", slug: "home-living", image: "/images/Category/category16.jpg" },
    { id: 17, name: "Decor & Accessories", slug: "home-living", image: "/images/Category/category17.jpg" },
    { id: 18, name: "Dairy", slug: "mens-fashion", image: "/images/Category/category18.jpg" },
    { id: 19, name: "Groceries", slug: "electronics", image: "/images/Category/category19.jpg" },
    { id: 19, name: "Groceries", slug: "electronics", image: "/images/Category/category19.jpg" },
    { id: 20, name: "Women's Shoes", slug: "womens-fashion", image: "/images/Category/category20.jpg" }
  ];

  // Handle filter change (e.g., when button is clicked)
  const handleFilterChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(5); // Reset to 5 categories when filter changes
  };

  // Filter categories based on selected filter
  const filteredCategories = activeCategory === "all" 
    ? categories 
    : categories.filter(category => category.slug === activeCategory);

  const categoriesToShow = filteredCategories.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 5); 
  };

  return (
    <div>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Shop by Category
          </h2>

          <div className="text-center mb-8">
            <button
              onClick={() => handleFilterChange("all")}
              className="px-4 py-2 mx-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              All Categories
            </button>
            <button
              onClick={() => handleFilterChange("electronics")}
              className="px-4 py-2 mx-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Electronics
            </button>
            <button
              onClick={() => handleFilterChange("mens-fashion")}
              className="px-4 py-2 mx-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Men's Fashion
            </button>
            <button
              onClick={() => handleFilterChange("womens-fashion")}
              className="px-4 py-2 mx-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Women's Fashion
            </button>
            <button
              onClick={() => handleFilterChange("home-living")}
              className="px-4 py-2 mx-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Home & Living
            </button>
            <button
              onClick={() => handleFilterChange("beauty-health")}
              className="px-4 py-2 mx-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Beauty-Health
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categoriesToShow.map((category) => (
              <a
                key={category.id}
                href={`/category/${category.slug}`}
                className="group block text-center"
              >
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-base font-medium text-gray-700 group-hover:text-blue-600 transition">
                  {category.name}
                </h3>
              </a>
            ))}
          </div>

          {filteredCategories.length > visibleCount && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Category;
