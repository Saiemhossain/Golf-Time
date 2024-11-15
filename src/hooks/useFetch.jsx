/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url)
        console.log(response.data);
        setData(response.data);
        setLoading(false)
      } catch (err) {
        console.log(err);
        setError(err)
      } finally {
        setLoading(false)
     }
    }

    fetchData();
}, [url]);
  return { data, loading, error };
}
