import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import httpClient from "../plugins/interceptor.js";
import Loader from '../components/Loader'

function CountryDetail() {
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const headers = {
    "X-CSCAPI-KEY": process.env.REACT_APP_API_KEY,
  };
  const getStates = async () => {
    setIsLoading(true);
    const response = await httpClient.get(`countries/${params.countryId}/states`, {
      headers: headers,
    });
    if (response) {
      setIsLoading(false);
      setStates(response);
    }
  };

  const goToStateDetail = (stateId, stateName) => {
    localStorage.setItem('state', stateName);
    navigate(`/${params.countryId}/state/${stateId}`);
  }

  const filterStates = () => {
    if (searchText) {
      return states.filter((item) => {
        return item.name.indexOf(searchText) !== -1;
      });
    } else {
      return states;
    }
  };

  useEffect(() => {
    const currentCountry = localStorage.getItem('country');

    if (currentCountry) {
      setCountry(currentCountry)
    }

    getStates();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="countries-page">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-3">
          <p className="my-3 text-center text-3xl text-gray-700">States for - {country}</p>
          <div class="mb-6">
            <label
              for="searchInput"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Search State
            </label>
            <input
              type="text"
              id="searchInput"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search States here"
              onChange={(e) => setSearchText(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-6 gap-4">
            {states.length &&
              filterStates().map((item, index) => (
                <p
                  key={index}
                  className="text-gray-900 p-1 cursor-pointer shadow-2xl rounded bg-red-300 whitespace-no-wrap text-center"
                  onClick={() => goToStateDetail(item.iso2, item.name)}
                >
                  {item.name}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetail;
