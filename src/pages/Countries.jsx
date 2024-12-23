import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpClient from "../plugins/interceptor.js";
import Loader from "../components/Loader";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const headers = {
    "X-CSCAPI-KEY": process.env.REACT_APP_API_KEY,
  };
  const getCountries = async () => {
    setIsLoading(true);
    const response = await httpClient.get("countries", {
      headers: headers,
    });
    if (response) {
      setIsLoading(false);
      setCountries(response);
    }
  };

  const goToCountryDetail = (countryId, countryName) => {
    localStorage.setItem("country", countryName);
    navigate(`/country/${countryId}`);
  };

  const filterCountries = () => {
    if (searchText) {
      return countries.filter((item) => {
        return item.name.indexOf(searchText) !== -1;
      });
    } else {
      return countries;
    }
  };

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="countries-page">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-3">
          <p className="my-3 text-center text-3xl text-gray-700">Countries</p>
          <div className="mb-6">
            <label
              htmlFor="searchInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Search Country
            </label>
            <input
              type="text"
              id="searchInput"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Countries here"
              onChange={(e) => setSearchText(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.length &&
              filterCountries().map((item, index) => (
                <div
                  key={index}
                  className="bg-dark text-light rounded-lg shadow-md p-4 dark:bg-gray-800 cursor-pointer"
                  onClick={() => goToCountryDetail(item.iso2, item.name)}
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Capital: {item.capital}</p>
                  <p>Currency: {item.currency}</p>
                  <p>Phone Code: {item.phonecode}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Countries;
