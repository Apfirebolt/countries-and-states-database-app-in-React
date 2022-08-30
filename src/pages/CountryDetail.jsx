import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import httpClient from "../plugins/interceptor.js";
import Loader from '../components/Loader'

function CountryDetail() {
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState([]);
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
          <div className="grid grid-cols-6 gap-4">
            {states.length &&
              states.map((item, index) => (
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
