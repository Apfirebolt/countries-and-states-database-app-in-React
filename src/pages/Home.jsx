import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("API to be called here");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="text-center py-3 px-5">
      <p className="text-gray-700 text-bold text-3xl">Tech Stack</p>

      <div className="w-48 my-6 mx-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p
          className="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600"
        >
          React
        </p>
        <p
          className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Tailwind CSS
        </p>
        <p
          className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Flowbite
        </p>
        
      </div>

      <p className="text-blue-700 text-bold text-xl">
        This is an app to search for countries, states and cities of the world.
      </p>

      <p className="text-blue-600 my-3 text-bold text-xl">
        This uses this API to fetch relevant data 📄{" "}
        <a href="https://countrystatecity.in/docs">
          https://countrystatecity.in/docs
        </a>
      </p>

      <p className="text-blue-500 my-3 text-bold text-xl">
        Ask a question related to this API here{" "}
        <a href="https://countrystatecity.in/faq/">
          https://countrystatecity.in/faq/
        </a>
      </p>

      <p className="text-blue-400 my-3 text-bold text-xl">
        Please find Github link of this API here, don't forget to give it a star
        🌟{" "}
        <a href="https://github.com/dr5hn/countries-states-cities-database">
          https://github.com/dr5hn/countries-states-cities-database
        </a>
      </p>
    </div>
  );
}

export default HomePage;
