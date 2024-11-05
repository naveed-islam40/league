"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type FetchData = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: { [key: string]: string };
  mode?: RequestMode;
};

const useFetch = ({ url, method, body, headers }: FetchData) => {
    
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          method,
          url: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${url}`,
          data: body,
          withCredentials: true,
        });

        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, headers]);

  return { data, error, loading };
};

export default useFetch;
