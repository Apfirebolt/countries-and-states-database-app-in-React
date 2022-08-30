import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpClient from "../plugins/interceptor.js";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const goToCountryDetail = (countryId) => {
    navigate(`/country/${countryId}`);
  }

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="countries-page">
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className="p-3">
          <p className="my-3 text-center text-3xl text-gray-700">Countries</p>
          <div className="grid grid-cols-6 gap-4">
            {countries.length &&
              countries.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-900 p-1 cursor-pointer shadow-2xl rounded bg-red-300 whitespace-no-wrap text-center"
                  onClick={() => goToCountryDetail(item.iso2)}
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

export default Countries;
