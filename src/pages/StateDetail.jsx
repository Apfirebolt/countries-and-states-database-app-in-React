import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpClient from "../plugins/interceptor.js";
import Loader from '../components/Loader'

function StateDetail() {
  const [cities, setCities] = useState([]);
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const headers = {
    "X-CSCAPI-KEY": process.env.REACT_APP_API_KEY,
  };
  const getCities = async () => {
    setIsLoading(true);
    const response = await httpClient.get(`countries/${params.countryId}/states/${params.stateId}/cities`, {
      headers: headers,
    });
    if (response) {
      setIsLoading(false);
      setCities(response);
    }
  };

  const filterCities = () => {
    if (searchText) {
      return cities.filter((item) => {
        return item.name.indexOf(searchText) !== -1;
      });
    } else {
      return cities;
    }
  };

  useEffect(() => {
    const currentState = localStorage.getItem('state');
    const currentCountry = localStorage.getItem('country');

    if (currentCountry) {
      setCountry(currentCountry)
    }

    if (currentState) {
      setState(currentState)
    }

    getCities();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cities-page">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-3">
          <p className="my-3 text-center text-3xl text-gray-700">Cities for {state} in {country}</p>
          <div className="mb-6">
            <label
              htmlFor="searchInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Search City
            </label>
            <input
              type="text"
              id="searchInput"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Cities here"
              onChange={(e) => setSearchText(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.length &&
              filterCities().map((item, index) => (
                <div
                  key={index}
                  className="bg-dark text-light rounded-lg shadow-md p-4 dark:bg-gray-800"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Latitude: {item.latitude}</p>
                  <p>Longitude: {item.longitude}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StateDetail;
