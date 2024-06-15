import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Searchbar from './Searchbar';

// Define the Navbar component
const Navbar = () => {

   // Render the Navbar component
  return (
    <div className="flex flex-col w-[100%] bg-slate-300">

          {/* Primary navigation */}
      <nav className="bg-white border-gray-600 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://images.zigcdn.com/images/revamp/zigwheels-logo-black.svg"
              className="h-8"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/view-three-dimensional-car-with-neon-lights_23-2150998554.jpg?size=626&ext=jpg&ga=GA1.1.2065522675.1685035157&semt=ais_user"
              className="h-8"
              alt=""
            />
          </a>
                 {/* Searchbar component */}
          <div>
            <Searchbar/>
          </div>
              
        </div>
      </nav>

      
     {/* Navbar 2 for secondary navbar */}

    <nav className="flex bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-6 rtl:space-x-reverse">
          {/* Logo or Brand Name can go here */}
        </a>
          {/* Button to toggle mobile menu */}
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-between text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>

        </button>
         {/* Dropdown menu for products */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* NavLink for Home */}
            <NavLink to="/" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                Home
              </li>
            </NavLink>

                {/* Dropdown menu item for Products */}
            <li className="relative group">
              <button className="flex items-center justify-between w-full py-2 px-3 font-bold text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Products
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
                {/* Dropdown menu for Products */}
              <div className="absolute left-0 z-10 hidden w-44 bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:block dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                
                 {/* NavLink for All */}
                <NavLink to="/all" activeClassName="active">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      All
                    </li>
                  </NavLink>
                      {/* NavLink for Cars */}
                  <NavLink to="/cars" activeClassName="active">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Cars
                    </li>
                  </NavLink>
                   {/* NavLink for Bikes */}
                  <NavLink to="/bikes" activeClassName="active">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Bikes
                    </li>
                  </NavLink>
                   {/* NavLink for Scooty */}
                  <NavLink to="/scooty" activeClassName="active">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Scooty
                    </li>
                  </NavLink>
                </ul>
              </div>
            </li>

            {/* NavLink for Gallery */}

            <NavLink to="/gallery" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Gallery
              </li>
            </NavLink>

             {/* NavLink for AboutUs */}
            <NavLink to="/aboutus" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                AboutUs
              </li>
            </NavLink>
             {/* NavLink for log in */}
            <NavLink to="/login" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                LogIn
              </li>
            </NavLink>
              {/* NavLink for sign up */}
            <NavLink to="/signup" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                SignUp
              </li>
            </NavLink>
            
             {/* NavLink for cart */}
            <NavLink to="/cart" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <img src="https://cdn-icons-png.freepik.com/256/891/891468.png?ga=GA1.1.2065522675.1685035157&semt=ais_hybrid" alt=""  className="w-10 h-10 " />
              
              </li>
            </NavLink>

             {/* NavLink for bookmark */}
             {/* <NavLink to="/bookmark" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIGBAUHA//EAEMQAAIBAwIDAwYJCwMFAAAAAAABAgMEEQUhBhIxB0FREyJhcYGxFDI2UnJzdZHBFyMkMzRTVZSh0uEWkpMVQmKCg//EABoBAQEAAwEBAAAAAAAAAAAAAAABAgQFAwb/xAA3EQEAAgECBAQDBgQGAwAAAAAAAQIDBBEFEiExEzJBgVFScRQzNGGh8CKRwcI1QmKx4fEVIyX/2gAMAwEAAhEDEQA/APMTaaiAEAYBAUojAICgAGNgAAIBQAAAAAgA7gABAAAFAxQZSMIAACAAAKEAAAAACgQCqBAgA7wAAABX0AgAAAIoUAAAAAYQAAAAAAFAgFUIAQCgQAgKwIAQFYEAgVQAAAACAACgAIBQIBUwIBQGQIuoFwBGAAAEBQAACBQAAAAAARQAAAgAACAUAwAAC52AxAAAABAAGAAUAAAgAAoAB68L1gbDpnBOv6nawu7a2pxpTWY+VqqLkvVu17TGbxDOKWlzPyc8S/ubX23HT+hPFhfDsfk54l/dWn8x/geLCeHZPyc8S/urT+Y/wPFhfDsfk54l/dWn8z/geJU8Kw+zviVRz8HtZY7o3G79WVgeJCeFZrN5b1rO4qW93SlRrUpcs4TWHF+Bmw2fEAAAYAAAAABjcABO4KAAAFABAABlTSdSKcU8tJ+lZCvVeIKFzq2tado7u6tCwp2ir1I0ZuPO9lh47jwi3LEy95iZmIdHOpw2q1Sja2ur3UYy5ZSo1ajimvTzC1+TzWiErXm8sbsefQ/4Rrv/ACT/ALjDx6fPDLwrfLJz6H/CNd/3z/uHj0+eDwrfLJz6H/CNd/5J/wBw8enzweFb5ZXn0P8AhGu/75/3Dx6fPB4Vvkl12r2ml3FCT07TdXoXa3jOpFyU/Q98oyjPT54/mk4bfLLWalOdKbhUhKE49YyWGe9bRaN4nd4TE16TDFoqIBWwIAAAAMkts94GOAAU7gIBQKgiMAAAzpbVYfSXvA9ZvduJZfYz7zX9Pdsz3c7s7tqMeD7NxglKVLnk18553Pm9ftfU5Zt6T0/k7Gmjkw05ejtU34nIdEy/EBl+IDL8QGX4jqPOe1OnCN7p9RRXPKnNSl47o+m4FaZpeJ7RMOHxWIi1ZaOd1yRgQBgBgAAAzTysATAGAVQAAIqAMAgAGUP1kPpL3ges33ykl9jGv6e7Zn+js+z35IWX1C/E+b1n4nN9XZwfc4/o566HIdBQAAAB552qftGnfQn70fScB8l/rDicX81fdop33IQBjcCgQAAAqAZAmAqYAqCKBAKAAAZQWakPpL3gesX3ykl9jGv6e7Ynv7Oz7PfkhZfUL8T5vWfic31drB9zj+jnroch0FAAAAHnnap+0ad9XP3o+k4D5L/WHE4v5qtEO+5BkCgCiACCgOgACBQCgAgAAAAMqX62H0l7wPWL75SS+xjX9Pds+vs7Ts9+SFl9QvxPm9Z+JzfV2NP9zj+jnLoch0VAdMAAAHnnap+0ad9CfvR9JwHyX+sOJxfzVaKd9yDAAAigQAABgAIFUAACAACgQDKl+th9Je8D1i9+UcvsY1/8vu2fX2dp2e/JCy+oX4nzes/E5vq7Gn+5x/Rzl0OQ6LhazqdDSNPq3l1LzIrEY985d0V47nvptPfUZIpR5Z81cNJtZpejce3FbUow1OnRha1HjmgsOl4etHd1PBaVw74pnmj9XJw8TvOSIvHSXoKlFpNNNPGMeB83PTpPd2/TeFA887U/2jTvoT96Po+A+TJ9YcTi/mq0bB9A5CACgQACAoEAAAKFAAQAAADARahKMpPZNNgeq1q9K41/ytGpGcJaM8NPJ4bdPdsb7y7js9+SFl9QvxPm9Z+JzfV2cH3ONzJ1IUqUqlSSjCKzKT6JeJyK1m07R3dCZ2jeXkXFuvS1zUc0nJWdDKpR6Jv53rZ9nw/RV02Pr5p7vmtZqZz5Onljs6Pd4z9x0N5hp7PQ+z/iN1oR0q+n+civ0ecn8ZfN9Z81xfQ8s+Pjjp6u3w7V7x4V56+jefd4nAdd572p73GnfQn70fScB8l/rDicX81GinfcgAhQIAFAMCAMgAKFAAAIAAqgN/EDtOH9WekXlatKDnTq0JUnHPTPevaY2jfaGUW26vVuAJxXCNl58f1KXXvTeT5TWzFdTl39Xf00b4KbNN4/4h8rJ6VZTzCLXl5xfV/NN7hGg5f/AH37+jU4jquafCr7tGl1W+y7jvuQN5eQMqc506kalOco1ItOMk+jRLRFo5Z7ETMTvHd65wjr8db09OpiN5S2qwz1/wDJes+O4jop02T/AEz2fS6PVRnp+cd2t9qT/SdOS38ybx6Mo6fAetL/AFho8Wn+Kvu0U77kAAABAKAAAAAUAAUAAAAAADx9IHY2Ou6np9rK1s7qVOjJt8qSeM9ceBrZtHgzW5716vfHqcuOvLWejr5Nybct292/E2YiIeG6BDAADkWF9c6fcq4s6rpVUsZXh4Hnlw0y05LxvDPHktjtzVnqy1HULvUrj4RfVpVamMJvuRMOHHhry0jaDJktlne87uIerBQGAAEwBQIAAAAqgAAH0jRqyhzRo1X6oPcnPX4/qvLP7hhKMopc0ZRfhJYLExPZJjbubAQC4AAXklyqXJPl+dy7Dfrt6m3qgQAgAAAAoF5JcnPyT5fFx2+8bxvsu3TdiEAIBQAEAAUKAXAEfRljuk9nqVbU62j8IWF1bW8a1RqEOVp9Gnvt6j5KmnrqNbelrbR1fQ3zWw6Wt6xu4mqSp65wVV1G/so2txDLi2sbp4TXoZ7YK202vjFjtvDyy2rn0s3vG0tI0zR9Q1WUlYWsqnK/Ok3iMfWzv59Vh08b5Z2cnFgyZp/ghnqmg6lpcYzvLdwpS2VRPKyY4NZgz9KWZZdNlxdbww0vR9Q1aTWn20qij8aT2ivaXUarDp43yW2Y4sGTL5IZapoWpaSlK+t3Cm3jyieUTBrMGo+7ndcuny4Y3vHRssko9lak1v5R7/8A2OVE/wD2Nvy/tb/bh2/78zWbjRtQoWC1C4oclrJJqcpJN+w61NXhvl8Gs72c+2DJWniWjaHKp8K61UdJRsX+dWYy51jGO/wPG3EtLWJmbdnpXR55/wAp/pTWvhjtlZNyUebn5vNx6xPEtLFOeb9F+xZ5ty8vVwNS0y70u4VC+ounNx5lvlSXoZsYNRjz15scvHLhvinlvDn2fCmt3tvCvQs8U5rMHUmo5Xdsa+XiWlxW5bW6/k9aaLPeN4q6+7028sbxWl5QlSrSxyxffl4WDZx58WWnPS28PG+K9Lclo2lzv9Layqs6U7NxlGHO5OSwl6/YzXniOmivNzeuz2+x5t9tvz3d/qGPyZ2ksLPm7/8AsczD/il4js3cn4CJavd6JqNjZRvLu38lQljEpSWd+mx18eswZMk46TvMOdfT5Mdea0bQ5dlwprV7bQuKNn+bmsx55qLaPLLxLS4rclrdYelNHnvG8VdXeWlexuJULqlKlVj1jI28eSmWvNSd4a96WpbltG0vgZsQCAUC9wVEBQD6P1Fjuj0671eei8GWF1CnTqZUINVOmGnufJ4tLGq118c7+vZ9DfPOHTVtEfB8ncQ4r4OuLi6o+RdLmdOUG+VuKTTXiekY/wDx+trSs77/AM+rz5vtmltNukx/RxoVamndnFKvYN06tRRc6kOqy92enLGbic1ydY9N/wBGFbTj0MWp3XhyvV1bgvVIalOVWnBTUJz3ylHP9GNbjjT6/H4UbTO3SP38DTXnLpL+JO/cnWqad2c0K2ny8nOpFOdSHVZfnP8AActc3FJrl6x8J/Qm04tBFsZoVerqfA2orUZOtGCnyVJvL2W2/oew1eOuHiFPD6T0NPecuktzzv8AVyOHKdrX4Gsad+8W7r7vrl+WeE/Q3g8tZe9OIXtj6zt/az0ta20dYt23/udL2lTvI31KhVjy2UaeaKj0b7/ab/A4p4c3r1tv1avFbX54ielfR2fG19dWWh6T8ErzoueOZweM4jsavCsOPJqMvPG7Y12S1MOPlnb/AKZ8eajeW2n6XK3uKlOVWSlNxeHJ4yY8KwY75ckWjfY4hlvTHTlnZ8u0KE7mOhxpRU6s54Sf/c2lsZ8HtFZzbztCcRiZjH8V1xKhVto69xJK3uYx5o0rSi0ks9X1z69jHS2i1bTp8MTHxtK5/wCGY8bJtPwhOPeV3mgzy5PnXntYbWVuzLhHTHmjt3TiPnxzHxhl2g6xfWM7a2tKsqEKlNupKPWS6Y/qY8H0uLLFsmSN9pOJZ702pWXP0Sha1+E9IpXzxScotJ9JS5tkzX1eTJj1uW1O7Y09aW01It+TWu0OrevXKdKtD9HjFO3hHpLx9vcdPg9cX2e0xPX1lz+Izk8WKz29Hf17/S9YdlUr6hd6TdU4rkpVOalvt3SWJHOrh1Gm5tqVvWfXv/t1bs5MWXlibTWY9mt8e21/Q1GjLUK8LhTi1SqRpqDx3p4OrwnJivinwq7fHq5/EKZIyRN53awzqtBAAAChQAAxs8ljuNusOOq9pZULX/plCpClFRUpVnvjv+LscTLwamS8355jd0sfErUpFJr2cbXOMdQ1W1laqlStqEtpKnmUmvDOx7aXhWHT3jJvvMPPPr8mWvJEbQ+OgcT3GjUJ2zo0rq1m96VTbHqeH9x6avh1NRbn35bMdPrL4a8kxvD663xZcahZOwtrOnZWsvjRg/Ol6NlsYaXhlMOSMlrc0wubXXyV5K12h8tB4ouNHt5Wsrend2km/wA1UeMZ642f3GWr4dTUW54nlsx0+stgrybbw+utcWV9Rs3Y2tpSsrTpKNPdv+iwjHS8NpgyeLe3NZnn11steStdocZcQVXw6tEVvBU1LPl1UaafNzdMePpPb7DX7V9p36/D22ef2qfAjDEe/vu+uq8T1dW0eFje2VKc6aSVxCo1JNd+MHlg4fXBmnNS+35bf8ssmsnLjjHavb1/cPjrnEFXWbG1tqttToxtl5s41G3LbHTB6aXQ1017Xi2/N+THPqrZ6Vry9l17iGrrVta0KltCirb4soz5nLbHTCGk0FdNe1onfmTUaq2etYmOzPW+J7jVvgX6PC3nZy5oShPmbe2G8peBNLw6uni/XfmZ5tZfLy9NtnPuON/hMIVK+jWdS8prEK03lRfiljPsya1OETjnauWYr8HrbiM2rvOON/i67W+Ja2s1LKde1hTlayUsxqN87Xs26GzpeH108Xitt+Z459XfNyzNduV8+Iddq67c0K1W2jQ8lBwiozcs59iM9Foo0lZrE77sdTqZ1ExNo2fStxHWq6DR0j4PGKpNNVlNt5Tz0wY10Fa6mc826z6LbVWnBGLbbb1fTWuKKusadRtrmzgq1FpxuYVHlNd+OX8TDS8PjTZJvS3SfT9yufWTmpFbV6x6ubDjWVWjThqek293WofFqOSWX4tNPB4TwnktM4cs1ie8PaOITaI56RMw6XXtZutcu1cXMIU1FcsIQW0V+Jv6XR00tOWvq1NRqLZ7c1nWGy8ACAAMgoAAICt5AmF4FFIHtKGPvID3yn3gHvjPcA78lAgNbAMBE7sBQAsroNoQ9QUwJ6gXdFx3kEYEAAAKFUAAwBcAAADAAAAAgFAARgACAAAADG4QAgEYVUBAMwoCUCKBUBGASAuAAACMBgAAArUfECAMAAIAAvcBAiYAAAoBlF5WcEVWURLJBcAMYKASVQWAJKBYAgwoggAAAAIAwAAAQCgAIuoECAGUYqCwujIyUAlgCgAAAAAAFAAEGAAZAAQAAYEXUC94B9AIBGAAYA//2Q==" alt=""  className="w-10 h-10 " />
          
              </li>
            </NavLink> */}

             {/* NavLink for wishlist */}
             {/* <NavLink to="/cart" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmHDGm3pQLAc8LMgWT0u_iNKINlytBi4Xak4sycYia98Yd0b5xBd1HRTmKA&s" alt=""  className="w-10 h-10 " />
       
              </li>
            </NavLink> */}
            
          </ul>
        </div>
      </div>
    </nav>

    </div>
  );
};

export default Navbar;
