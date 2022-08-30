import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import httpClient from "../plugins/interceptor.js";
import Loader from '../components/Loader'

function StateDetail() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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

  useEffect(() => {
    getCities();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cities-page">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-3">
          <p className="my-3 text-center text-3xl text-gray-700">Cities for - Country ID - {params.countryId} State ID - {params.stateId} </p>
          <div className="grid grid-cols-6 gap-4">
            {cities.length &&
              cities.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-100 p-1 shadow-2xl rounded bg-green-700 whitespace-no-wrap text-center"
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

export default StateDetail;
