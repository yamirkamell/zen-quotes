import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const useApi = (url: string, prop: any) => {
  const [data, setData] = useState<[]|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse = await axios.get(url);
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        setError("Error getting the data");
        setLoading(false);
      }
    };

    fetchData();
  }, [prop]);

  return { data, loading, error };
};

export default useApi;