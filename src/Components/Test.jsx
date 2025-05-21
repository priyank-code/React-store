import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [company, setCompany] = useState('All');
  const [color, setColor] = useState('All');
  const [price, setPrice] = useState(6000000);
  const [sort, setSort] = useState('lowest');

  const [categories, setCategories] = useState(['All']);
  const [companies, setCompanies] = useState(['All']);
  const [colors, setColors] = useState(['All']);

  // Fetch products from API
  useEffect(() => {
    axios.get('https://api.pujakaitem.com/api/products')
      .then((res) => {
        const data = res.data;

        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(data.map(p => p.category))];

        // Extract unique companies
        const uniqueCompanies = ['All', ...new Set(data.map(p => p.company))];

        // Extract unique colors (flatten array)
        const allColors = data.flatMap(p => p.colors);
        const uniqueColors = ['All', ...new Set(allColors)];

        // Find max price for slider range
        const maxPrice = Math.max(...data.map(p => p.price));
        setPrice(maxPrice);

        setCategories(uniqueCategories);
        setCompanies(uniqueCompanies);
        setColors(uniqueColors);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);

  // Filter products based on filters
  useEffect(() => {
    let tempProducts = [...products];

    if (searchTerm.trim() !== '') {
      tempProducts = tempProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== 'All') {
      tempProducts = tempProducts.filter(p => p.category === category);
    }

    if (company !== 'All') {
      tempProducts = tempProducts.filter(p => p.company === company);
    }

    if (color !== 'All') {
      tempProducts = tempProducts.filter(p => p.colors.includes(color));
    }

    tempProducts = tempProducts.filter(p => p.price <= price);

    // Sorting
    if (sort === 'lowest') {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'highest') {
      tempProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'a-z') {
      tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'z-a') {
      tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(tempProducts);
  }, [searchTerm, category, company, color, price, sort, products]);

  const clearFilters = () => {
    setSearchTerm('');
    setCategory('All');
    setCompany('All');
    setColor('All');
    setPrice(Math.max(...products.map(p => p.price)));
    setSort('lowest');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-white rounded shadow mb-8 lg:mb-0">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          {categories.map(cat => (
            <p
              key={cat}
              className={`cursor-pointer mb-1 capitalize ${
                category === cat ? 'text-blue-600 font-bold' : ''
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </p>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Company</h3>
          <select
            value={company}
            onChange={e => setCompany(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {companies.map(comp => (
              <option key={comp} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map(c => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-6 h-6 rounded-full border ${
                  color === c ? 'ring-2 ring-blue-500' : ''
                }`}
                style={c !== 'All' ? { backgroundColor: c } : {}}
                aria-label={c === 'All' ? 'All colors' : c}
              >
                {c === 'All' ? 'All' : ''}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price: ₹{price}</h3>
          <input
            type="range"
            min="0"
            max={Math.max(...products.map(p => p.price))}
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Sort By</h3>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Name (A-Z)</option>
            <option value="z-a">Name (Z-A)</option>
          </select>
        </div>

        <button
          onClick={clearFilters}
          className="bg-red-600 text-white py-2 px-4 rounded w-full"
        >
          Clear Filters
        </button>
      </aside>

      {/* Products List */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-red-600 font-semibold">
            No products found!
          </p>
        ) : (
          filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 capitalize">{product.category}</p>
              <p className="font-bold text-indigo-700">₹{product.price}</p>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Products;
