import React, { useContext, useState } from 'react';
import { fetch_cars_data } from '../Data/CarData';
import { fetch_bike_data } from '../Data/BikeData';
import { fetch_scooty_data } from '../Data/ScootyData';
import { storeContext } from '../context/storeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark, faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const All = () => {
  const { addToCart } = useContext(storeContext);
  const [productQuantity, setProductQuantity] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setProductQuantity(prevQuantity => ({
      ...prevQuantity,
      [product.id]: (prevQuantity[product.id] || 0) + 1
    }));
  };

  const handleBookmark = (product) => {
    setBookmarks(prevBookmarks => 
      prevBookmarks.includes(product.id) 
        ? prevBookmarks.filter(id => id !== product.id) 
        : [...prevBookmarks, product.id]
    );
  };

  const handleWishlist = (product) => {
    setWishlist(prevWishlist => 
      prevWishlist.includes(product.id) 
        ? prevWishlist.filter(id => id !== product.id) 
        : [...prevWishlist, product.id]
    );
  };

  const renderProductCard = (product) => (
    <div
      key={product.id}
      className="relative max-w-sm bg-white border-gray-400 border-2 rounded-lg shadow-lg p-6"
    >
      <div className="absolute top-0 right-2 flex space-x-2">
        <button
          type="button"
          className="text-gray-500 hover:text-yellow-500"
          onClick={() => handleBookmark(product)}
        >
          <FontAwesomeIcon 
            icon={bookmarks.includes(product.id) ? solidBookmark : regularBookmark} 
            size="lg" 
          />
        </button>
        <button
          type="button"
          className="text-red-500 hover:text-red-500"
          onClick={() => handleWishlist(product)}
        >
          <FontAwesomeIcon 
            icon={wishlist.includes(product.id) ? solidHeart : regularHeart} 
            size="lg" 
          />
        </button>
      </div>
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={product.image}
        alt={product.model}
      />
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">{product.model}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <ul className="mb-2">
          <li>
            <span className="font-semibold">Price:</span> {product.price}
          </li>
          <li>
            <span className="font-semibold">Color:</span> {product.color}
          </li>
          <li>
            <span className="font-semibold">Max Speed:</span> {product.max_speed} km/h
          </li>
          <li>
            <span className="font-semibold">Make Year:</span> {product.make_year}
          </li>
          <li>
            <span className="font-semibold">Fuel:</span> {product.fuel}
          </li>
          <li>
            <span className="font-semibold">Location:</span> {product.location}
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
          <div className="flex items-center">
            {productQuantity[product.id] && (
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex justify-center items-center">
                {productQuantity[product.id]}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-5 p-5">
      {fetch_cars_data.map(renderProductCard)}
      {fetch_bike_data.map(renderProductCard)}
      {fetch_scooty_data.map(renderProductCard)}
    </div>
  );
};

export default All;
