import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context/Context";
import axios from "axios";
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [colors, setColors] = useState(["All"]);
  const [selectedColor, setSelectedColor] = useState("All");
  const [price, setPrice] = useState(0);
  const [sortOption, setSortOption] = useState("lowest");
  const [searchItems, setSearchItems] = useState("");

  const { cart, handleAddToCart, handleRemoveFromCart, cartQty, setCartQty } = useContext(AppContext);

  const inc = () => {setCartQty(cartQty + 1)}
  const dec = () => {cartQty !== 0 ? setCartQty(cartQty - 1) : 0}

  const addToCart = (product) => {
    handleAddToCart(product);
    inc();
  };

  const removeFromCart = (id) => {
    handleRemoveFromCart(id);
    dec();
  };

  useEffect(() => {
    axios
      .get("https://api.pujakaitem.com/api/products")
      .then((res) => {
        const data = res.data;

        setProducts(data);
        setFilteredProducts(data);

        const uniqueCategories = [
          "All",
          ...new Set(data.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);

        const allColors = ["All", ...new Set(data.flatMap((p) => p.colors))];
        setColors(allColors);

        const maxPrice = Math.max(...data.map((p) => p.price));
        setPrice(maxPrice);

        const images = ["All", ...new Set(data.map((p) => p.image))];
        setImage(images);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  useEffect(() => {
    let updateProducts = [...products];

    if (searchItems && searchItems.trim() !== "") {
      updateProducts = updateProducts.filter((p) =>
        p.length > 0
          ? "<div className='text-red-700'>Item not found</div>"
          : p.name.toLowerCase().includes(searchItems.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      updateProducts = updateProducts.filter(
        (p) => p.category === selectedCategory
      );
    }

    if (selectedColor !== "All") {
      updateProducts = updateProducts.filter((p) =>
        p.colors.includes(selectedColor)
      );
    }

    if (price > 0) {
      updateProducts = updateProducts.filter((p) => p.price <= price);
    }

    switch (sortOption) {
      case "lowest":
        updateProducts.sort((a, b) => a.price - b.price);
        break;
      case "highest":
        updateProducts.sort((a, b) => b.price - a.price);
        break;
      case "atoz":
        updateProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ztoa":
        updateProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    setFilteredProducts(updateProducts);
  }, [
    searchItems,
    products,
    selectedCategory,
    selectedColor,
    price,
    sortOption,
  ]);

  const handleClearFilters = () => {
    setSelectedCategory("All");
    setSelectedColor("All");
    setPrice(Math.max(...products.map((p) => p.price)));
    setSearchItems("");
    setSortOption("lowest");
  };

  return (
    <div className="grid md:grid-cols-4 gap-4 px-4">
      <div className="col-span-1 md:border-r-2 md:border-gray-300 p-5">
        <div className="flex flex-row">
          <div>
            <input
            type="search"
            placeholder="Search products..."
            className="w-full p-2 border-2 border-green-600 rounded"
            onChange={(e) => setSearchItems(e.target.value)}
            value={searchItems}
          />
          </div>
          <div className="md:hidden flex relative ml-3">
            <button><NavLink to="/cart" ><FontAwesomeIcon icon={faCartPlus} className="text-2xl text-gray-800 self-start" />
          <span className="absolute text-white bg-green-600 rounded-full h-[15px] w-[15px] text-center text-[10px] left-5 top-0">{cartQty}</span></NavLink></button>
          </div>
        </div>

        <div className="md:mt-5 mt-3">
          <h2 className="font-medium text-lg text-green-600">Categories</h2>
          <div className="grid gap-1 mt-2">
            {categories.map((p) => (
              <p
                key={p}
                onClick={() => setSelectedCategory(p)}
                className={`flex flex-col cursor-pointer capitalize ${
                  selectedCategory === p ? "text-green-600 font-semibold" : ""
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="md:mt-5 mt-3">
          <h2 className="font-medium text-lg text-green-600">Color</h2>
          <div className="grid grid-flow-col auto-cols-max gap-1 mt-2 text-center xl:grid-rows-1 grid-rows-2">
            {colors.length > 0 &&
              colors.map((c) => {
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`flex justify-center items-center rounded-full cursor-pointer  ${
                      selectedColor === c ? "border-3 border-green-600" : ""
                    } p-4 w-10 h-10`}
                    style={c !== "All" ? { backgroundColor: c } : {}}
                  >
                    {c === "All" ? "All" : ""}
                  </button>
                );
              })}
          </div>
        </div>

        <div className="md:mt-5 mt-3">
          <h2 className="font-medium text-lg text-green-600">Price</h2>
          <div className="flex flex-col mt-3">
            <span>{`₹` + price}</span>
            <input
              type="range"
              name="range"
              className="mt-1"
              id="range"
              min="0"
              max={Math.max(...products.map((p) => p.price))}
              onChange={(e) => setPrice(Number(e.target.value))}
              value={price}
            />
          </div>
        </div>

        <div className="md:mt-5 mt-3">
          <h2 className="font-medium text-lg text-green-600">Filter</h2>
          <div className="mt-2">
            <select
              id="data"
              name="data"
              className="border rounded-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
              <option value="atoz">A to Z</option>
              <option value="ztoa">Z to A</option>
            </select>
          </div>
        </div>

        <div className="md:mt-5 mt-3">
          <button
            className="font-medium text-white text-lg bg-green-600 hover:bg-green-700 border-2 transition-all px-2 py-1 rounded-sm"
            onClick={handleClearFilters}
          >
            Clear Filter
          </button>
        </div>
      </div>

      <div className="col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts && filteredProducts.length && price > 0 > 0 ? (
            filteredProducts.map((p) => (
              <div key={p.id} className="p-5">
                <div className="bg-gray-100 rounded-xl shadow-md">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt="Not found"
                      className="w-full h-[200px] object-cover rounded-t-xl"
                    />
                    <span className="absolute top-0 right-0 bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-l-xl rounded-b-xl capitalize">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex justify-between p-3">
                    <p className="font-medium">{p.name}</p>
                    <p className="font-medium">₹ {p.price}</p>
                  </div>
                  <div className="flex justify-center pb-3 items-center gap-2">
                    {cart.some((item) => item.id === p.id) ? (
                      <>
                        <button
                          onClick={() => removeFromCart(p.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded"
                          title="Decrease quantity"
                        >
                          -
                        </button>

                        <span className="font-semibold">
                          {cart.find((item) => item.id === p.id).quantity}
                        </span>

                        <button
                          onClick={() => addToCart(p)}
                          className="bg-green-600 text-white px-3 py-1 rounded"
                          title="Increase quantity"
                        >
                          +
                        </button>

                        <button
                          onClick={() => removeFromCart(p.id)}
                          className="text-red-600 hover:text-red-700 ml-2"
                          title="Remove from cart"
                        >
                          <i className="fas fa-trash-alt text-lg"></i>
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => addToCart(p)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                      >
                        <i className="fas fa-cart-plus mr-2"></i> Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-red-600 font-medium">Items not found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
